import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import "../feeder/feeder.css";

const Comments = (props) => {
    const post = useSelector(store => store.posts.selectedPost);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+ post.id +'/comments')
         .then(response => response.json())
         .then(json => setComments(json))
    }, [])
    return (
        <div className='feeder' >
            {comments.map((comment, index) => <Cart item={comment} index={index} />
            )}
           
        </div>
    );
}

export default Comments;