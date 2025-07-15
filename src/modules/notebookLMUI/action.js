
import { createAsyncThunk } from "@reduxjs/toolkit";
import hyperAudion from "../../services/hyperAudion";


export const createNotebook = createAsyncThunk(
  'notebook/createNotebook',
  async (notebookData, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };
    console.log("=========config======",config)

    const {
      data: { data },
    } = await hyperAudion.post(`/notebook`, notebookData, config);
    return data;
  }
);

export const getNotebook = createAsyncThunk(
  'notebook/getNotebook',
  async (_, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.get(`/notebook`, notebookData, config);
    return data;
  }
);

export const deleteNotebook = createAsyncThunk(
  'notebook/deleteNotebook',
  async (id, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.delete(`/notebook?${id}`, config);
    return data;
  }
);

  export const updateNotebook = createAsyncThunk(
  'notebook/deleteNotebook',
  async (id, notebookData, { getState }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${getState().authReducer.token}`,
      },
    };

    const {
      data: { data },
    } = await hyperAudion.put(`/notebook?${id}`, notebookData, config);
    return data;
  }
);