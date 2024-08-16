import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = ({ profiles, onSelectProfile }) => {
    const [filters, setFilters] = useState({
        language: '',
        education: '',
        specialization: '',
        searchTerm: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const filteredProfiles = profiles.filter(profile =>
        (filters.language === '' || profile.languages.toLowerCase().includes(filters.language.toLowerCase())) &&
        (filters.education === '' || profile.education.toLowerCase().includes(filters.education.toLowerCase())) &&
        (filters.specialization === '' || profile.specialization.toLowerCase().includes(filters.specialization.toLowerCase())) &&
        (filters.searchTerm === '' || profile.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
    );

    return (
        <div className="search-page">
            <h1>Search Content Creators</h1>
            <div className="filters">
                <label>
                    Language:
                    <input type="text" name="language" value={filters.language} onChange={handleChange} />
                </label>
                <label>
                    Education:
                    <input type="text" name="education" value={filters.education} onChange={handleChange} />
                </label>
                <label>
                    Specialization:
                    <input type="text" name="specialization" value={filters.specialization} onChange={handleChange} />
                </label>
                <label>
                    Search:
                    <input type="text" name="searchTerm" value={filters.searchTerm} onChange={handleChange} />
                </label>
            </div>
            <div className="profile-list">
                {filteredProfiles.map(profile => (
                    <div
                        key={profile.email}
                        className="profile-card"
                        onClick={() => onSelectProfile(profile)}
                    >
                        <h3>{profile.name}</h3>
                        <p>{profile.specialization}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
