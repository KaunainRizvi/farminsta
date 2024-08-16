import React from 'react';
import avatar from '../assets/avatar.jpg';
import './Avatar.css';

const Avatar = ({ size = "medium" }) => {
    return (
        <img
            src={avatar}
            alt="Avatar"
            className={`avatar avatar-${size}`}
        />
    );
};

export default Avatar;