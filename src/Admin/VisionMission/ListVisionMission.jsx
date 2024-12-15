import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListVisionMission = () => {
    const [visionMissions, setVisionMissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/vision-missions') 
            .then(response => {
                setVisionMissions(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError('Bir xəta baş verdi');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Yüklənir...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Vision və Mission Siyahısı</h2>
            <ul>
                {visionMissions.map(item => (
                    <li key={item.id}>
                        <h3>Vision: {item.vision}</h3>
                        <p>Mission: {item.mission}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListVisionMission;
