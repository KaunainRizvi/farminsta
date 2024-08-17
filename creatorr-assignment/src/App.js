import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileView from './components/ProfileView';
import ProfileEdit from './components/ProfileEdit';
import SearchPage from './components/SearchPage';
import CreateProfile from './components/CreateProfile';
import './App.css';

function App() {
    const [profiles, setProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

    useEffect(() => {
        const storedProfiles = JSON.parse(localStorage.getItem('profiles'));
        if (storedProfiles) {
            setProfiles(storedProfiles);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }, [profiles]);

    const handleSaveProfile = (newProfile) => {
        if (selectedProfile) {
            const updatedProfiles = profiles.map((profile) =>
                profile.email === selectedProfile.email ? newProfile : profile
            );
            setProfiles(updatedProfiles);
            setSelectedProfile(null);
        } else {
            setProfiles([...profiles, newProfile]);
        }
    };

    const handleSelectProfile = (profile) => {
        setSelectedProfile(profile);
    };

    const handleDeleteProfile = (email) => {
        const updatedProfiles = profiles.filter(profile => profile.email !== email);
        setProfiles(updatedProfiles);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProfileView profiles={profiles} onDelete={handleDeleteProfile} onEdit={handleSelectProfile} />} />
                <Route path="/edit" element={<ProfileEdit selectedProfile={selectedProfile} onSave={handleSaveProfile} />} />
                <Route path="/search" element={<SearchPage profiles={profiles} onSelectProfile={handleSelectProfile} />} />
                <Route path="/create" element={<CreateProfile onSave={handleSaveProfile} />} />
            </Routes>
        </Router>
    );
}

export default App;