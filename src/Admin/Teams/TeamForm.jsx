import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeamForm = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        if (id) {
            setIsEditing(true); 
            fetchTeamMember(); 
        }
    }, [id]);

    const fetchTeamMember = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/team/${id}`); 
        const data = await response.json();
        setName(data.name); ``
        setPosition(data.position); ``
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const method = isEditing ? 'PUT' : 'POST'; ``
        const url = isEditing ? `http://127.0.0.1:8000/api/team/${id}` : 'http://127.0.0.1:8000/api/team';

        await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, position }),
        });

        navigate('/Teams/TeamList'); 
    };

    return (
        <div className='teamhome'> 
            <h1>{isEditing ? 'Edit Team Member' : 'Add New Team Member'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default TeamForm;
