import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import "./postButton.css";

const PostButton = (props) => {
    const deletePost= ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1',{method:'DELETE'})
      .then(response => console.log(response))
      .then(json => console.log("sdf", json));

      props.deletePost()
    }


    return (
        <div className='flex flex-row-reverse gap-5 mt-8 pr-4'>
           <button className='buttons bg-blue-500 hover:bg-blue-600' onClick={()=>props.updatePost()}>
                <MdEdit size={18} color='white' />
                <div>Update</div>
           </button>  
           <button className='buttons bg-red-500 hover:bg-red-600' onClick={()=>deletePost()}>
                <RiDeleteBinFill size={16} color='white' />
                <div>Delete</div>
           </button> 
        </div>
    );
}

export default PostButton;