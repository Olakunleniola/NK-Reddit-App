import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getSubReddits } from '../../api/api';

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const data = await getSubReddits();
        return data;
    }
)

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {data: []}, 
    reducers: {},
    extraReducers : (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => state)
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(loadSubreddits.rejected, (state) => state)
    }
})

export const selectedSubreddit = (state, name) => state.subreddits.data.filter(itm => itm.name === name)
export const selectAllSubreddits = (state) => state.subreddits.data;
export default subredditsSlice.reducer;