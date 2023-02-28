import React from 'react';
import PostHeader from './PostHeader';
import PostText from './PostText';

function PostDetail() {

    const [clicked, setClicked] = React.useState(false);
    
    const newPost = () =>{
        setClicked(true)
    }

    return (
        <div className='flex flex-col p-2 mt-10  bg-white w-full'>
            <div className='flex flex-col w-3/5'>
                <PostHeader newPost={()=>newPost()} />
                <PostText clicked={clicked}/>
               
            </div>

        </div>
    );
}

export default PostDetail;