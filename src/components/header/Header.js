import React from 'react';
import "./header.css";
import { BsPlayCircleFill } from 'react-icons/bs';
import { RiNotification2Fill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoPersonCircle } from 'react-icons/io5';
import HeaderPostInfo from './HeaderPostInfo';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate= useNavigate();
    return (
        <div className='header'>
            <BsPlayCircleFill size={22} color='blue' className='hover:cursor-pointer' onClick={()=>{navigate('/')}}></BsPlayCircleFill>
            <div className='flex flex-1 font-bold text-lg' > Arbit Blog</div>
            <HeaderPostInfo />
            <RiNotification2Fill size={16} color='gray'></RiNotification2Fill>
            <BiCategoryAlt size={18} color='gray'></BiCategoryAlt>
            <IoPersonCircle size={30} color='gray'></IoPersonCircle>

        </div>
    );
}

export default Header;