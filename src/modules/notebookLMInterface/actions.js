import { createAsyncThunk } from "@reduxjs/toolkit";
import hyperAudion from "../../services/hyperAudion";

export const uploadSource = createAsyncThunk(
  'notebook/uploadSource',
  async ({directory, notebookId, notebookData }, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.post(`/upload/${directory}/notebook/${notebookId}`, notebookData, config);
    return data;
  }
);

export const getSource = createAsyncThunk(
  'source/getSource',
  async (sourceId, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.get(`/source/${sourceId}`, config);
    return data;
  }
);

export const getSourceList = createAsyncThunk(
  'source/getSourceList',
  async (notebookId, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.get(`/source/${notebookId}/notebook`, config);
    return data;
  }
);

export const sendMessageToChatbot = createAsyncThunk(
  'source/getSourceList',
  async ({ question, sourceId }, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.post(`/chatbot/ask-questions`,{ question, sourceId }, config);
    return data;
  }
);
