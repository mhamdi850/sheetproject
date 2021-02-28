import React, { createContext, useReducer } from 'react';
import postReducer from './post.reducer';
import axios from 'axios';


// Initial state
const initialState = {
  posts: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalReducer = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  // Actions
  async function getPosts() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}api/post/`)

      dispatch({
        type: 'GET_POSTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'POSTS_ERROR',
        payload: err.response.data.error
      });
    }
  }


  return (<GlobalContext.Provider value={{
    posts: state.post,
    error: state.error,
    loading: state.loading,
    getPosts,
   
  }}>
    {children}
  </GlobalContext.Provider>);
}