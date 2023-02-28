import React from 'react';
import { useSelector } from 'react-redux';

function HeaderPostInfo(props) {
    const postList = useSelector(state => state.posts.posts);

    return (
        <div className='flex  w-14 pl-1 gap-0.5'>
            <div className='flex relative left-0'>Post</div>
            <div className='flex relative font-medium px-0.5 text-xs bg-gray-300 justify-center items-center h-max min-w-min 
                rounded-full font-sans text-slate-500 '>{postList.length}</div>
            
        </div>
    );
}

export default HeaderPostInfo;