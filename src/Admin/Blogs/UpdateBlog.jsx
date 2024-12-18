import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const { id } = useParams(); 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [calendarIcon, setCalendarIcon] = useState(null);
    const [folderIcon, setFolderIcon] = useState(null);
    const [uncategorized, setUncategorized] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchBlog();
        }
    }, [id]);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/admin/blogs/show/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setBlog(response.data);
        } catch (error) {
            console.error("Xəta baş verdi:", error.response?.data || error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }
        if (calendarIcon) {
            formData.append('calendar_icon', calendarIcon); 
        }
        if (folderIcon) {
            formData.append('folder_icon', folderIcon);
        }
        formData.append('uncategorized', uncategorized);

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/admin/blogs/update/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            
            setMessage(response.data.message);
            setTitle('');
            setContent('');
            setImage(null);
            setCalendarIcon(null);
            setFolderIcon(null);
            setUncategorized('');
            navigate('/admin/blogs_crud'); 
        } catch (error) {
            setMessage('Xəta baş verdi: ' + (error.response?.data.message || 'Xəta'));
        }
    };

    return (
        <div className='adminHero'>
            <h2>{id ? 'Blogu Güncəllə' : 'Yeni Blog Yazısı Əlavə Et'}</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Başlıq:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Məzmun:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Şəkil:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div>
                    <label>Kalendar İkonu:</label>
                    <input
                        type="file"
                        onChange={(e) => setCalendarIcon(e.target.files[0])} 
                    />
                </div>
                <div>
                    <label>Qovluq İkonu:</label>
                    <input
                        type="file"
                        onChange={(e) => setFolderIcon(e.target.files[0])} 
                    />
                </div>
                <div>
                    <label>Kateqoriya:</label>
                    <input
                        type="text"
                        value={uncategorized}
                        onChange={(e) => setUncategorized(e.target.value)}
                    />
                </div>
                <button type="submit">{id ? 'Güncəllə' : 'Əlavə Et'}</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
