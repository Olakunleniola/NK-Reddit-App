import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditsPost } from "../../api/api";

//  Get All post middleware
export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (subredditUrl) => {
        const data = await getSubredditsPost(subredditUrl);
        return data;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: true,
        failedToLoad: false,
        isDark: localStorage.getItem("dark"),
        searchTerm: '',
        posts: []
    }, 
    reducers: {
        setSearchTerm: (state,action) => {
            state.searchTerm = action.payload;
        },
        setDark: (state, action) => {
            state.isDark = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoading = true;
                state.failedToLoad = false
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.failedToLoad = false
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state) => {
                state.failedToLoad = true;
                state.isLoading = true;
            })
    }
})

export const getAllPosts = state => state.posts.posts;
export const isLoading = state => state.posts.isLoading;
export const getSearchTerm = state =>  state.posts.searchTerm;
export const getDark = state =>  state.posts.isDark;
export const getPostByTitle = (state, id) => state.posts.posts.filter(post => post.id === id);
export const {setSearchTerm, setDark} = postsSlice.actions;
export default postsSlice.reducer;