import { useState, useRef, useEffect } from 'react';
import './AuthUI.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP, verifyOTP } from './action';
import { useNavigate } from 'react-router-dom';

const AuthUI = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state)=> state.auth);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setShowOTP(false);
    setOtp(['', '', '', '']);
  };

const  handleSubmit = async (e)=> {
  e.preventDefault();
  if(email.trim()){
    dispatch(sendOTP({ email }))
    .unwrap()
    .then(()=>{
      setShowOTP(true);
      startResendTimer();
    })
    .catch((error)=>{
      alert(error);
    })
  }
};

  const startResendTimer = () => {
    setResendTimer(30);
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOTPChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 3) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOTPSubmit = () => {
  const otpValue = otp.join('');
  if (otpValue.length === 4) {
    dispatch(verifyOTP({ email,  otp: Number(otpValue) }))
      .unwrap()
      .then(() => {
        setIsLoggedIn(true);
        navigate('/home');
      })
      .catch((error) => {
        alert(error); 
      });
  }
};

  const handleResendOTP = () => {
  if (email.trim()) {
    dispatch(sendOTP({ email }))
      .unwrap()
      .then(() => {
        setOtp(['', '', '', '']);
        startResendTimer();
        console.log('OTP resent to:', email);
      })
      .catch((error) => {
        alert(error);
      });
  }
};


  const handleBackToEmail = () => {
    setShowOTP(false);
    setOtp(['', '', '', '']);
    setResendTimer(0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowOTP(false);
    setEmail('');
    setOtp(['', '', '', '']);
    setIsLogin(false);
  };

  useEffect(() => {
    const otpValue = otp.join('');
    if (otpValue.length === 4) {
      handleOTPSubmit();
    }
  }, [otp]);

  const socialButtons = [
    { icon: '🔍', text: 'Continue with Google', color: '#4285f4' },
    { icon: '🪟', text: 'Continue with Microsoft Account', color: '#00a1f1' },
    { icon: '🍎', text: 'Continue with Apple', color: '#000000' },
    { icon: '📱', text: 'Continue with phone', color: '#666666' }
  ];

  return (
    <div>
      <div className="auth-header">
        NotebookLM
      </div>

      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-main">
            {isLoggedIn ? (
              <div className="login-success">
                <h2>✅ Login Successful!</h2>
                <p>Welcome back! You have successfully logged in.</p>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : showOTP ? (
              <div>
                <h2 className="auth-title">Enter verification code</h2>
                
                <div className="otp-container">
                  <div className="otp-info">
                    We sent a verification code to<br />
                    <strong>{email}</strong>
                  </div>
                  
                  <div className="otp-inputs">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={el => otpRefs.current[index] = el}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOTPChange(index, e.target.value)}
                        onKeyDown={(e) => handleOTPKeyDown(index, e)}
                        className="otp-input"
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                  
                  <div className="otp-actions">
                    <div className="otp-resend">
                      {resendTimer > 0 ? (
                        <span>Resend code in {resendTimer}s</span>
                      ) : (
                        <span>
                          Didn't receive code? {' '}
                          <a href="#" onClick={(e) => { e.preventDefault(); handleResendOTP(); }} className="otp-resend-link">
                            Resend
                          </a>
                        </span>
                      )}
                    </div>
                    
                    <button onClick={handleBackToEmail} className="otp-back-btn">
                      Back to email
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="auth-title">
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </h2>

                <div className="auth-form">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e);
                      }
                    }}
                  />
                  
                  <button
                    onClick={handleSubmit}
                    className="auth-submit-btn"
                  >
                    Continue
                  </button>
                </div>

                <div className="auth-toggle">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMode();
                    }}
                    className="auth-toggle-link"
                  >
                    {isLogin ? 'Sign up' : 'Log in'}
                  </a>
                </div>
                </div>
                )}

                <div className="auth-divider-container">
                  <div className="auth-divider-line"></div>
                  <span className="auth-divider-text">OR</span>
                  <div className="auth-divider-line"></div>
                </div>

                <div className="auth-social-buttons">
                  {socialButtons.map((button, index) => (
                    <button
                      key={index}
                      className="auth-social-btn"
                      onClick={() => console.log(`Clicked ${button.text}`)}
                    >
                      <span 
                        className="auth-social-icon"
                        style={{ color: button.color }}
                      >
                        {button.icon}
                      </span>
                      {button.text}
                    </button>
                  ))}
                </div>
                <div className="auth-footer">
                  <a href="#" className="auth-footer-link">
                    Terms of Use
                  </a>
                  <span className="auth-footer-separator">|</span>
                  <a href="#" className="auth-footer-link">
                    Privacy Policy
                  </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUI;