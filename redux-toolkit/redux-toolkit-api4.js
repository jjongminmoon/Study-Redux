// 5. createAsyncThunk() : 비동기 로직을 위한 Thunk를 만들어주는 함수
// - createAsyncThunk()로 생성되는 Action Type : pending(비동기 요청 진행 중) / fulfilled(비동기 요청 성공) / rejected(비동기 요청 실패)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../api/client";

export const fetchPostById = createAsyncThunk("post/fetchPostById", async (postId, thunkAPI) => {
  const response = await apiClient.fetchPostById(postId);
  return response.data;
});

const initialState = {
  pending: false,
  data: null,
  error: null
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state, action) => {
        state.pending = true;
        state.data = null;
        state.error = null;
      })
      .addCase(fetchPostById.fullfilled, (state, action) => {
        state.pending = false;
        state.date = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  }
});

export default postSlice;
