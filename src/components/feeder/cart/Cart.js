import React from 'react';
import { useDispatch } from 'react-redux';
import "./cart.css";
import { SelectedPost } from '../../../store/actions/StorePostAction';
import { useNavigate } from 'react-router-dom';

function Cart({ item, index }) {
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const selectedPost = (item) => {
        dispatch(SelectedPost(item));
        navigate(`post/${item.id}`)

    }
    return (

        <div className='cart' key={index} onClick={() => selectedPost(item)} >
            <div className='title'>{item.title}</div>
            <div className='text'>{item.body}</div>
        </div>



    );
}

export default Cart;