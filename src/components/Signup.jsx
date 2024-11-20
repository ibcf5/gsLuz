import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/SignupStyles'; 

function Signup() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuário cadastrado:', formData);
    navigate('/dashboard'); 
  };

  return (
    <Container>
      <h1>Luz!</h1>
      <p>Use e-mail e senha para entrar em sua conta.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="email" id="username" name="username" placeholder="email@email.com" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Signup;
