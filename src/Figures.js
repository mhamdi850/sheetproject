import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalContext } from './reducers/globalReducer';
import { getPosts } from './actions/post.actions';

export const Figures = () => {

const [loadPost, setLoadPost] = useState(true)
const dispatch  = useDispatch()

useEffect(() => {
  if(loadPost) {
      dispatch(getPosts())
      setLoadPost(false)
  }
}, [loadPost])

const { posts } = useContext(GlobalContext);

const amounts = posts.map(post => post.amount);

const income = amounts
    .filter(post => post.nature === 'ca')
    .reduce((acc, post) => (acc + post.amount), 0)
    .toFixed(2);


  return (
    <div>
        <ul>
            <li>CA Total : {income}</li>
        </ul>
    </div>
  )
}