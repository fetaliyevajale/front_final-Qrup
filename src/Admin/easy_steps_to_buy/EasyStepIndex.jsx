import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function EasyStepIndex() {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        axios.get('/api/easy_steps_to_buy')
            .then(response => {
                setSteps(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Easy Steps to Buy Property</h2>
            <Link to="/admin/easy_steps_to_buy/create" className="btn btn-primary">Yeni Addım Yarat</Link>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {steps.map(step => (
                        <tr key={step.id}>
                            <td>{step.id}</td>
                            <td>{step.title}</td>
                            <td>{step.description}</td>
                            <td>
                                <Link to={`/admin/easy_steps_to_buy/edit/${step.id}`} className="btn btn-warning btn-sm">Edit</Link>
                                <button onClick={() => deleteStep(step.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function deleteStep(id) {
        axios.delete(`/api/easy_steps_to_buy/${id}`)
            .then(response => {
                setSteps(steps.filter(step => step.id !== id));
            })
            .catch(error => console.log(error));
    }
}
