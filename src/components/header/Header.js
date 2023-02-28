import React from 'react';
import "./header.css";
import { BsPlayCircleFill } from 'react-icons/bs';
import { RiNotification2Fill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoPersonCircle } from 'react-icons/io5';
import Post from './Post';

function Header() {
    return (
        <div className='header'>
            <BsPlayCircleFill size={22} color='blue' ></BsPlayCircleFill>
            <div className='flex flex-1 font-bold text-lg'> Arbit Blog</div>
            <Post />
            <RiNotification2Fill size={16} color='gray'></RiNotification2Fill>
            <BiCategoryAlt size={18} color='gray'></BiCategoryAlt>
            <IoPersonCircle size={30} color='gray'></IoPersonCircle>

        </div>
    );
}

export default Header;