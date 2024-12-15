import React from "react";

export default function NotFound() {
  return (
    <div className="container">
      <div className="centerNot">
        <div className="notLeft">
          <div className="tops">
            <h2>
              Bu səhifəni yükləmək mümkün deyil, əlaqənizi yoxlayın və Bu
              Səhifəni yenidən yükləyin
            </h2>
            <p>
              Zəhmət olmasa internet bağlantınızı yoxlayın və səhifəni yenidən
              açmağa çalışın. Problemin davam etməsi halında, texniki dəstəyə
              müraciət edə bilərsiniz.
            </p>
          </div>
          <button type="submit">Əsas səhifəyə qayıt</button>
        </div>
        <div className="notRight">
          <img src="/imagesFile/image9.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
