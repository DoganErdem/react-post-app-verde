import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddPost, DeletePost, UpdatePost } from '../../store/actions/StorePostAction';
import PostButton from './PostButton';
import { useNavigate } from 'react-router-dom';

function PostText(props) {

    const post = useSelector(store => store.posts.selectedPost)
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const dispatch = useDispatch();
    const navigate =useNavigate();

    useEffect(()=>{
        if(props.clicked){
             const newPost = {
            title,
            body,
            userId:1
            }
        
            dispatch(AddPost(newPost));
            navigate(`/`)
        }},[props.clicked])

    const updatePost = ()=>{
        const newPost = {
            ...post,
            title,
            body
        }

        dispatch(UpdatePost(newPost));
        navigate(`/`);
    }

    const deletePost =()=>{
        dispatch(DeletePost(post.id));
        navigate(`/`);
    }

    return (
        <div className='flex flex-col gap-4 mt-8 pl-7 box-border'>
            
            <div className='flex flex-col flex-nowrap w-full h-36 px-4'>
                <div className='flex justify-start font-bold'>Title</div>
                <hr className='flex border-dashed font-medium border-black' />
                <hr className='flex border-dashed mt-1 border-black' />
                <textarea className='flex flex-nowrap pl-4 pt-4 font-bold' onChange={e=>setTitle(e.target.value)}>{title}</textarea>
            </div>
            <div className='flex flex-col w-full px-4 '>
                <div className='flex justify-start font-bold'>Detail</div>
                <textarea className='flex bg-slate-200 rounded h-52 p-2' onChange={e=>setBody(e.target.value)} >{body}</textarea>
            </div>
            <PostButton updatePost={()=>updatePost()} deletePost={()=>deletePost()} />
        </div>
    );
}

export default PostText;