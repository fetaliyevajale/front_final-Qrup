import React, { useState } from 'react';
import axios from 'axios';

const VisionMissionForm = ({ onSave }) => {
    const [vision, setVision] = useState('');
    const [mission, setMission] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/vision-missions', { vision, mission })
            .then(response => {
                onSave(response.data);
            })
            .catch(error => {
                console.error('Xəta baş verdi: ', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Vision</label>
            <input
                type="text"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
            />
            <label>Mission</label>
            <input
                type="text"
                value={mission}
                onChange={(e) => setMission(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default VisionMissionForm;
