import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import "./postHeader.css";

const PostHeader = (props) => {

    const navigate= useNavigate();

    return (
        <div className='postHeader'>
            <IoArrowBackCircleSharp size={30} color='gray' className='flex rounded-full hover:cursor-pointer hover:scale-110 hover:duration-100' 
                                    onClick={()=> {navigate('/')}} />
            <div className='flex flex-1 pl-2 text-xl font-bold'>Post</div>
            <Link to="comments" className='button bg-green-500 hover:bg-green-600 mr-1 '>Comments</Link>
            <button className='button bg-blue-400 hover:bg-blue-700' onClick={()=> props.newPost()}>+ New Post</button>
            
        </div>
    );
}

export default PostHeader;