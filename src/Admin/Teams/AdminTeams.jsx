
// AdminTeams.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeamList from './TeamList'; 
import TeamForm from './TeamForm'; 

const AdminTeams = () => {
    return (
        <div className="adminTeams">
            <Routes>
                <Route path="/" element={<TeamList />} />
                <Route path="/add" element={<TeamForm />} />
                <Route path="/edit/:id" element={<TeamForm />} />
            </Routes>
        </div>
    );
};

export default AdminTeams;
