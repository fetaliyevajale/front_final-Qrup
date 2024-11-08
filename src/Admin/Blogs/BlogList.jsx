import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchBlogs } from '../../api/api';  // Əgər fetchBlogs API metodu daxil edilirsə

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Blogları fetch etmək
        fetchBlogs()
          .then((res) => {
            console.log(res);  // Fetch edilmiş blogları konsola yazdırın
            setBlogs(res);  // Yeni məlumatla state-i yeniləyin
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error fetching blogs:", err);  
            setLoading(false); 
          });
    }, []);  // Komponent yükləndikdə yalnız bir dəfə çalışacaq

    const handleDelete = async (id) => {
        if (window.confirm("Bu blogu silmək istədiyinizdən əminsiniz?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/blogs/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`  // Tokeni əlavə edin
                    }
                });
                
                // Blogu listədən silmək
                setBlogs(blogs.filter(blog => blog.id !== id));  // Silinən blogu siyahıdan çıxarırıq
                alert("Blog uğurla silindi!");
            } catch (error) {
                console.error("Silinmə əməliyyatında xəta baş verdi:", error);
                alert("Xəta baş verdi: " + error.message);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/update_blog/${id}`);  // Redaktə səhifəsinə yönləndir
    };

    if (loading) return <p>Yüklənir...</p>;
    if (blogs.length === 0) return <p>Heç bir blog tapılmadı.</p>;

    return (
        <div className='adminHero'>
            <a href="/admin/insert_blog"><button>Əlavə et</button></a>
            <h2>Bloglar</h2>
            <table>
                <thead>
                    <tr>
                        <th>Başlıq</th>
                        <th>Məzmun</th>
                        <th>Şəkil</th>
                        <th>Əməliyyatlar</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog.id}>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>
                                {blog.image && (
                                    <img 
                                        src={`http://127.0.0.1:8000/storage/${blog.image}`} 
                                        alt={blog.title} 
                                        style={{ width: '100px', height: 'auto' }} 
                                    />
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleEdit(blog.id)}>Redaktə et</button>
                                <button onClick={() => handleDelete(blog.id)}>Sil</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
