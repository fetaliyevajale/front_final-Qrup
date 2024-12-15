import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateVisionMission = ({ match }) => {
    const [vision, setVision] = useState('');
    const [mission, setMission] = useState('');

    useEffect(() => {
        axios.get(`/api/vision-missions/${match.params.id}`)
            .then(response => {
                setVision(response.data.vision);
                setMission(response.data.mission);
            })
            .catch(error => {
                console.error(error);
            });
    }, [match.params.id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/api/vision-missions/${match.params.id}`, { vision, mission })
            .then(response => {
                console.log('Updated:', response.data);
            })
            .catch(error => {
                console.error(error);
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
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateVisionMission;
