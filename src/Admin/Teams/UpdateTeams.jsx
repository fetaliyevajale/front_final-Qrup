// UpdateTeams.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateTeams = ({ team, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
    });

    useEffect(() => {
        if (team) {
            setFormData({
                name: team.name,
                address: team.address,
            });
        } else {
            setFormData({
                name: '',
                address: '',
            });
        }
    }, [team]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (team) {
            axios.put(`http://127.0.0.1:8000/api/teams/${team.id}`, formData, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            })
            .then(() => onUpdate())
            .catch(error => console.error(error));
        } else {
            axios.post('http://127.0.0.1:8000/api/teams', formData, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            })
            .then(() => onUpdate())
            .catch(error => console.error(error));
        }
    };

    return (
        <div className='adminHero'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                </label>
                <label>
                    Address:
                    <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                </label>
                <button type="submit">{team ? 'Update Team' : 'Add Team'}</button>
            </form>
        </div>
    );
};

export default UpdateTeams;
