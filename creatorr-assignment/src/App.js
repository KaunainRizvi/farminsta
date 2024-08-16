import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileView from './components/ProfileView';
import ProfileEdit from './components/ProfileEdit';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
    const [profiles, setProfiles] = useState([
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            description: 'Content Creator | Tech Enthusiast | Video Producer',
            languages: 'English, Hindi',
            education: 'B.A. in Media Studies',
            specialization: 'Video Production, Editing',
        },
        // You can add more profiles here
    ]);
    const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

    const handleSaveProfile = (updatedProfile) => {
        setProfiles(
            profiles.map(profile =>
                profile.email === updatedProfile.email ? updatedProfile : profile
            )
        );
        setSelectedProfile(updatedProfile);
    };

    const handleSelectProfile = (profile) => {
        setSelectedProfile(profile);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<ProfileView profiles={profiles} selectedProfile={selectedProfile} />}
                />
                <Route
                    path="/edit"
                    element={<ProfileEdit
                        profiles={profiles}
                        selectedProfile={selectedProfile}
                        onSave={handleSaveProfile}
                    />}
                />
                <Route
                    path="/search"
                    element={<SearchPage profiles={profiles} onSelectProfile={handleSelectProfile} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
