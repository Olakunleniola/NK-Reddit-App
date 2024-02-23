import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComments } from "../../api/api";

// Load comment middleware
export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (permalink) => {
        // get comment data
        const data = await getComments(permalink);
        return data;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState : {
        comment: {},
        isloading: true,
        failedToLoad: false,
    },
    extraReducers : (builder) => {
        builder
            .addCase(loadComments.pending, (state) => {
                state.isloading = true;
                state.failedToLoad = false;
            })
            .addCase(loadComments.fulfilled, (state,action) => {
                state.isloading = false;
                state.failedToLoad = false;
                action.payload.forEach(element => {
                    state.comment[element.id] = [...action.payload]
                })
            })
            .addCase(loadComments.rejected, (state) => {
                state.isloading = true;
                state.failedToLoad = true;
            })
    }
})

export const getAllComments = (state, id) => state.comments.comment[id];
export const commentLoading = (state) => state.comments.isloading;

export default commentsSlice.reducer;