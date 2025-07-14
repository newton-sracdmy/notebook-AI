import axios from 'axios';
import { api } from '../configs/configs';

export default axios.create({
  baseURL: api
});
