import React, { useEffect, useState } from 'react';
import banner from '../assets/banner.jpg';
import Avatar from './Avatar';
import './ProfileView.css';

const ProfileView = ({ profiles, selectedProfile }) => {
    const [profile, setProfile] = useState(selectedProfile);

    useEffect(() => {
        setProfile(selectedProfile);
    }, [selectedProfile]);

    if (!profile) return <p>No profile selected</p>;

    return (
        <div className="profile-view">
            <img src={banner} alt="Banner" className="banner" />
            <div className="profile-info">
                <Avatar size="large" />
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
                <p className="description">{profile.description}</p>
                <div className="profile-details">
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Languages:</strong> {profile.languages}</p>
                    <p><strong>Education:</strong> {profile.education}</p>
                    <p><strong>Specialization:</strong> {profile.specialization}</p>
                    <div className="social-links">
                        <a href="https://twitter.com">{profile.name} Twitter</a>
                        <a href="https://instagram.com">{profile.name} Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
