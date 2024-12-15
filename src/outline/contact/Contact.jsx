import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="heroBlogs">
        <h2>Bizimlə əlaqə saxlayın</h2>
        <p>
          Bizimlə əlaqə saxlayaraq suallarınızı verə və ya xidmətlərimiz
          haqqında ətraflı məlumat ala bilərsiniz.
        </p>
      </div>

      <div className="centerContact">
        <div className="leftContact">
          <div className="links">
            <h6>Əlaqə saxlayın</h6>
            <div className="conts">
              <i className="fa-solid fa-location-dot"></i>
              <span>
              123 Main Street, Bakı <br />
              1000 AZ, Azərbaycan.
              </span>
            </div>

            <div className="contacts">
              <i className="fa-solid fa-phone"></i>
              <span>+123 456 7890</span>
            </div>

            <div className="contacts">
              <i className="fa-solid fa-envelope"></i>
              <span>hello@dhalem.com</span>
            </div>
            <div className="alt">
              <img src="/imagesFile/photo1.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="rightContact">
          <div className="top">
            <h3>
              Bizə sualınız varsa, ziyarət üçün müraciət etmək istəyirsinizsə və
              ya qiymət təklifi almaq istəyirsinizsə, çəkinmədən mesaj göndərin!
            </h3>
            <p>
              Komandamız sizinlə əlaqə saxlamaqdan məmnun olacaq və suallarınıza
              tez bir zamanda cavab verəcəkdir.
            </p>
          </div>

          <div className="formRight">
            <form action="" method="post">
              <div className="form-control">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tam adınız"
                />

                <label htmlFor="email">E-poçtunuz</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-control">
                <label htmlFor="phone">Telefon nömrəniz</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+123-456-7890"
                />

                <label htmlFor="subject">Mövzunuz</label>
                <select id="subject" name="select">
                  <option value="general">Sual</option>
                  <option value="visit"></option>
                  <option value="quote"></option>
                  <option value="support"></option>
                </select>
              </div>
            </form>

            <form action="" method="post">
              <div className="form-control">
                <label htmlFor="w3review">Mesajınız</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Bura yazın"
                ></textarea>
              </div>
            </form>
          </div>

          <button type="submit">Mesaj Göndər</button>
        </div>
      </div>
    </div>
  );
}
