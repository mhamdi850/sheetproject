import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import { isEmpty } from '../../Utils';
import '../Navigation/Navbar.css'

const Country = () => {


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
    
    <form>
        <label>
            <select name="search" id="search">
                <option value="france">france</option> 
                <option value="fermany">germany</option> 
            </select>
        </label>
    </form>
  
    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>Nature</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody id="countryTable">
       
            { !isEmpty(posts[0]) && 
                posts.map((post) => (
                <tr>
                <th>{post.country === 'france'} France</th> 
                <th> {post.nature === 'ca'} CA</th>
                <th> {post.amount}</th>
                </tr>
            ))}
       
        </tbody>
    
    </table>

</div>
    )
}

export default Country
