import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import { isEmpty } from '../../Utils';



const Data = () => {
    const [loadPost, setLoadPost] = useState(true)
    const dispatch  = useDispatch()

    const posts = useSelector((state) => state.postReducer)

    useEffect(() => {
        if(loadPost) {
            dispatch(getPosts())
            setLoadPost(false)
        }
    }, [loadPost])

    return (
      <div>
          <ul>
          {!isEmpty(posts[0]) && 
          <li>
             CA Total : {posts.filter(post => post.nature === 'ca')
                              .reduce((acc, post) => acc + post.amount, 0)
                              }
          </li>
            }
          </ul>

          <ul>
          {!isEmpty(posts[0]) && 
          <li>
             GM Total : {posts.filter(post => post.nature === 'gm')
              .reduce((acc, post) => acc + post.amount, 0)}
          </li>
            }
          </ul>

          <ul>
          {!isEmpty(posts[0]) && 
          <li>
             EBIT Total : {posts.filter(post => post.nature === 'ebit')
              .reduce((acc, post) => acc + post.amount, 0)}
          </li>
            }
          </ul>

      </div>
    ) 
}

export default Data
