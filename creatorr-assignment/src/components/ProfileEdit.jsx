import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import './ProfileEdit.css';

const ProfileEdit = ({ profiles, selectedProfile, onSave }) => {
    const [profile, setProfile] = useState(selectedProfile || {});

    useEffect(() => {
        setProfile(selectedProfile);
    }, [selectedProfile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(profile);
    };

    if (!profile) return <p>No profile selected</p>;

    return (
        <div className="profile-edit">
            <h1>Edit Profile</h1>
            <Avatar size="large" />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={profile.description} onChange={handleChange}></textarea>
                </label>
                <label>
                    Languages:
                    <input type="text" name="languages" value={profile.languages} onChange={handleChange} />
                </label>
                <label>
                    Education:
                    <input type="text" name="education" value={profile.education} onChange={handleChange} />
                </label>
                <label>
                    Specialization:
                    <input type="text" name="specialization" value={profile.specialization} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProfileEdit;
