
import React, { useState } from 'react';
import Avatar from './Avatar';
import './CreateProfile.css';

const CreateProfile = ({ onSave }) => {
    const [newProfile, setNewProfile] = useState({
        name: '',
        email: '',
        description: '',
        languages: '',
        education: '',
        specialization: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({
            ...newProfile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(newProfile);
        setNewProfile({
            name: '',
            email: '',
            description: '',
            languages: '',
            education: '',
            specialization: '',
        });
    };

    return (
        <div className="create-profile">
            <h1>Create Profile</h1>
            <Avatar size="large" />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={newProfile.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={newProfile.email} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={newProfile.description} onChange={handleChange}></textarea>
                </label>
                <label>
                    Languages:
                    <input type="text" name="languages" value={newProfile.languages} onChange={handleChange} />
                </label>
                <label>
                    Education:
                    <input type="text" name="education" value={newProfile.education} onChange={handleChange} />
                </label>
                <label>
                    Specialization:
                    <input type="text" name="specialization" value={newProfile.specialization} onChange={handleChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProfile;
