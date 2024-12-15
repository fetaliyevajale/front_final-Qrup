import React, { useEffect, useState } from 'react';
import API from './api';

function AboutUsHeroList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    API.get('/about-us-heroes')
      .then((response) => setHeroes(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>About Us Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <h3>{hero.title}</h3>
            <p>{hero.description}</p>
            {hero.image && <img src={`http://your-backend-url/storage/${hero.image}`} alt={hero.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUsHeroList;
