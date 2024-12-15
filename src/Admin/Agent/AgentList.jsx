import React, { useState, useEffect } from 'react';
import API from './api';

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    API.get('/agents')
      .then((response) => setAgents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Our Agents</h1>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <h3>{agent.name}</h3>
            <p>{agent.position}</p>
            <p>{agent.email}</p>
            <p>{agent.phone}</p>
            {agent.image && <img src={`http://your-backend-url/storage/${agent.image}`} alt={agent.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
