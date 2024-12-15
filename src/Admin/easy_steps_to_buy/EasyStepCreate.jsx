import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function EasyStepCreate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/easy_steps_to_buy', { title, description })
            .then(response => {
                history.push('/admin/easy_steps_to_buy');
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>Create Easy Step</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}
