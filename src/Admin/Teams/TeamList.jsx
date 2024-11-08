import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamList = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetchTeamMembers(); 
    }, []);

    const fetchTeamMembers = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/team'); 
        const data = await response.json();
        setTeamMembers(data);
    };

    const handleDelete = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/team/${id}`, {
            method: 'DELETE', 
        });
        fetchTeamMembers(); 
    };

    return (
        <div>
            <h1>Our Team</h1>
            <Link to="/admin/Teams/add">Add New Team Member</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers.map((member) => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>
                                <Link to={`/admin/Teams/edit/${member.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(member.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamList;
