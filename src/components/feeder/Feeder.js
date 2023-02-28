import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StorePostAction} from '../../store/actions/StorePostAction';
import Cart from './cart/Cart';
import "./feeder.css";

const Feeder =()=> {
    const postList = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        console.log("aasdasdasasd")
      if(postList.length == 0){
         fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(json => dispatch(StorePostAction(json)))
      }
           
      }, []) 

    return (
        <div className='feeder'>
            {postList.map((item,index)=> (
                <Cart item={item} key={index} />
            ))}
        </div>
    );
}

export default Feeder;