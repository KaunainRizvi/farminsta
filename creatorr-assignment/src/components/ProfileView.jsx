import React from 'react';
import Avatar from './Avatar';
import { useNavigate } from 'react-router-dom';
import './ProfileView.css';

const ProfileView = ({ profiles, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (profile) => {
        navigate('/edit', { state: { profile } });
    };

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
                                {profile.twitter && <a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                                {profile.instagram && <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                            </div>
                        </div>
                        <div className="profile-actions">
                            <button onClick={() => handleEdit(profile)}>Edit</button>
                            <button onClick={() => onDelete(profile.email)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileView;