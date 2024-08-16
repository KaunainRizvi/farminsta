import React from 'react';
import Avatar from './Avatar';
import './ProfileView.css';

const ProfileView = ({ profiles, onDelete, onEdit }) => {
    if (profiles.length === 0) {
        return <p className="center-message">Create New Profiles...</p>;
    }

    return (
        <div className="profile-view-container">
            {profiles.map((profile, index) => (
                <div key={index} className="profile-view">
                    <img src={profile.banner || 'default-banner.jpg'} alt="Banner" className="banner" />
                    <div className="profile-info">
                        <Avatar size="large" />
                        <h1>{profile.name}</h1>
                        <p className="description">{profile.description}</p>
                        <div className="profile-details">
                            <p><strong>Languages:</strong> {profile.languages}</p>
                            <p><strong>Education:</strong> {profile.education}</p>
                            <p><strong>Specialization:</strong> {profile.specialization}</p>
                            <div className="social-links">
                                <a href="https://twitter.com">{profile.name} Twitter</a>
                                <a href="https://instagram.com">{profile.name} Instagram</a>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <button onClick={() => onEdit(profile)}>Edit</button>
                            <button onClick={() => onDelete(profile.email)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileView;
