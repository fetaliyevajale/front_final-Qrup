import React, { useState, useEffect } from "react";
import axios from "axios";

const WhyChooseUs = () => {
  const [steps, setSteps] = useState([]); // Məlumatların siyahısı
  const [formData, setFormData] = useState({ title: "", description: "" }); // Form məlumatları
  const [editId, setEditId] = useState(null); // Redaktə ediləcək məlumatın ID-si

  const API_URL = "http://localhost/api/why-choose-us";

  // Məlumatları gətir
  const fetchSteps = async () => {
    try {
      const response = await axios.get(API_URL);
      setSteps(response.data);
    } catch (error) {
      console.error("Məlumatlar gətirilərkən xəta baş verdi:", error);
    }
  };

  // Yeni məlumat əlavə et
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Redaktə əməliyyatı
        await axios.put(`${API_URL}/${editId}`, formData);
        alert("Məlumat yeniləndi!");
      } else {
        // Əlavə əməliyyatı
        await axios.post(API_URL, formData);
        alert("Yeni məlumat əlavə edildi!");
      }
      setFormData({ title: "", description: "" });
      setEditId(null);
      fetchSteps();
    } catch (error) {
      console.error("Məlumat əlavə edilərkən xəta baş verdi:", error);
    }
  };

  // Məlumatı sil
  const handleDelete = async (id) => {
    if (window.confirm("Bu məlumatı silmək istədiyinizə əminsiniz?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("Məlumat silindi!");
        fetchSteps();
      } catch (error) {
        console.error("Məlumat silinərkən xəta baş verdi:", error);
      }
    }
  };

  // Məlumatı redaktə etmək üçün formda göstər
  const handleEdit = (step) => {
    setEditId(step.id);
    setFormData({ title: step.title, description: step.description });
  };

  useEffect(() => {
    fetchSteps();
  }, []);

  return (
    <div className="container">
      <h1>Why Choose Us</h1>

      {/* Məlumatların siyahısı */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Başlıq</th>
            <th>Təsvir</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => (
            <tr key={step.id}>
              <td>{step.id}</td>
              <td>{step.title}</td>
              <td>{step.description}</td>
              <td>
                <button onClick={() => handleEdit(step)}>Redaktə</button>
                <button onClick={() => handleDelete(step.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form */}
      <form onSubmit={handleCreate}>
        <h2>{editId ? "Məlumatı Redaktə Et" : "Yeni Məlumat Əlavə Et"}</h2>
        <label>
          Başlıq:
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Təsvir:
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">{editId ? "Yenilə" : "Əlavə Et"}</button>
      </form>
    </div>
  );
};

export default WhyChooseUs;
