import React from 'react';

function Cart({item, index}) {
    return (
        <div className='flex flex-col p-4 w-full h-60 gap-2 ' key={index} >
            <div className='flex font-bold'>Name:</div>
            <div className='flex w-full  '>{item.name}</div>
            <div className='flex font-bold'>E-mail:</div>
            <div className='flex w-full '>{item.email}</div>
            <div className='flex font-bold'>Comment:</div>
            <div className='flex w-full '>{item.body}</div>
            <hr></hr>
        </div>
    );
}

export default Cart;