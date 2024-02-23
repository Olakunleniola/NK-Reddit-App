import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddit/subredditSlice'
import postReducer from '../features/posts/postSlice'
import commentReducer from '../features/comments/commentsSlice';

export default configureStore({
  reducer: {
    subreddits: subredditReducer,
    posts: postReducer,
    comments: commentReducer
  }
});

