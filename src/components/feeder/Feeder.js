import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import "./feeder.css";

function Feeder() {

    const [list, setList] = useState([]);

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(json => setList(json))
      },[]) 

    console.log(list); 

    return (
        <div className='feeder'>
            {list.map((item,index)=> (
                <Cart item={item} index={index}/>
            ))}
        </div>
    );
}

export default Feeder;