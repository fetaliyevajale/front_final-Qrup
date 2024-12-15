import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [houses, setHouses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    rooms: "",
    bed: "",
    bath: "",
    image: null,
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Ev məlumatlarını API-dan gətiririk
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/admin/products/index", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Şəbəkə sorğusu uğursuz oldu");
        }
        const data = await response.json();
        console.log(data);
        
        setHouses(data);
      } catch (error) {
        console.error("Məlumat gətirilərkən xəta:", error);
      }
    };
  
    fetchData();
  }, []);
  

  // Form dəyişikliklərini idarə edir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Şəkil faylını idarə edir
  const handleFileChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  // Yeni ev əlavə etmək üçün formu göndərir
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token tapılmadı. Lütfən yenidən daxil olun.");
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        // FormData-ya bütün form məlumatlarını əlavə et
        formData.append(key, form[key]);
      });

      const response = await fetch("http://127.0.0.1:8000/api/admin/products/store", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // FormData-nı göndəririk
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Xəta baş verdi.");
      }

      // Ev əlavə edildikdən sonra yeni ev siyahıya əlavə edilir
      setHouses((prev) => [...prev, data]);
      setForm({
        name: "",
        location: "",
        price: "",
        rooms: "",
        bed: "",
        bath: "",
        image: null,
      });
      setShowForm(false); // Formu gizlədir
    } catch (error) {
      console.error("Xəta baş verdi:", error);
    }
  };

  // Detallar səhifəsinə yönləndirir
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <div className="flexWrap">
        {houses.map((house, index) => (
          <div className="cols" key={index} onClick={() => handleClick(house.id)}>
            <img src={`http://127.0.0.1:8000/storage/${house.image}`} alt={house.name} />
            <h4>{house.name}</h4>
            <div className="icons">
              <i className="fa-solid fa-location-dot"></i>
              <span>{house.location}</span>
            </div>
            <button>{house.price}</button>
            <div className="rooms">
              <div className="border">
                <i className="fa-solid fa-border-all"></i>
                <span>{house.rooms}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bed"></i>
                <span>{house.bed}</span>
              </div>
              <div className="border">
                <i className="fa-solid fa-bath"></i>
                <span>{house.bath}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Formanı bağlayın" : "Yeni Ev əlavə edin"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ev Adı" value={form.name} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Məkan" value={form.location} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Qiymət" value={form.price} onChange={handleChange} required />
          <input type="number" name="rooms" placeholder="Otaqların sayı" value={form.rooms} onChange={handleChange} required />
          <input type="number" name="bed" placeholder="Yataqların sayı" value={form.bed} onChange={handleChange} required />
          <input type="number" name="bath" placeholder="Hamamların sayı" value={form.bath} onChange={handleChange} required />
          <input type="file" name="image" onChange={handleFileChange} />
          <button type="submit">Yeni Ev əlavə edin</button>
        </form>
      )}
    </div>
  );
}
