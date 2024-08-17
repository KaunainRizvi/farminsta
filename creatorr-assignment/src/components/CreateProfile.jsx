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
        avatar: null,
        banner: null,
        twitter: '',
        instagram: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({
            ...newProfile,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setNewProfile({
                ...newProfile,
                [name]: reader.result,
            });
        };
        reader.readAsDataURL(file);
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
            avatar: null,
            banner: null,
            twitter: '',
            instagram: '',
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
                <label>
                    Avatar:
                    <input type="file" name="avatar" accept="image/*" onChange={handleImageChange} />
                </label>
                <label>
                    Banner:
                    <input type="file" name="banner" accept="image/*" onChange={handleImageChange} />
                </label>
                <label>
                    Twitter:
                    <input type="url" name="twitter" value={newProfile.twitter} onChange={handleChange} placeholder="https://twitter.com/yourprofile" />
                </label>
                <label>
                    Instagram:
                    <input type="url" name="instagram" value={newProfile.instagram} onChange={handleChange} placeholder="https://instagram.com/yourprofile" />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProfile;