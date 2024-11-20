import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Styles } from '../styles/DashboardStyles';
import Dispositivos from './Dispositivos';
import Consumo from './Consumo';

function Dashboard() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    // Lógica para logout pode ser adicionada aqui, se necessário
    navigate('/');
  };

  return (
    <Styles>
      <header>
        <nav>
          <div className="menu-item" onClick={() => scrollToSection('dashboard-section')}>Dashboard</div>
          <div className="menu-item" onClick={() => scrollToSection('dispositivos-section')}>Dispositivos</div>
          <div className="menu-item" onClick={() => scrollToSection('consumo-section')}>Consumo</div>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="section" id="dashboard-section">
        <h1>Gasto visto de uma em uma hora em cada dispositivo IoT.</h1>
        <p>Aqui vai mostrando o gasto de todos os dispositivos cadastrados em valor de real, de acordo com o valor do kWh.</p>
        <div className="data-grid">
          <div className="data-column">
            <h2>14 de novembro de 2024</h2>
            <p className="timerange">às 18:20 - horário de Brasília.</p>
            <p><span>smart TV - quarto da Maria</span>: está ligada a aproximadamente uma hora agora o que daria um gasto médio de</p>
            <p className="highlighted-value">R$ 0,07 reais.</p>
            <p><span>smart TV - sala de estar</span>: está ligada a aproximadamente três horas agora o que daria um gasto médio de</p>
            <p className="highlighted-value">R$ 0,21 reais.</p>
          </div>

          <div className="data-column">
            <h2>14 de novembro de 2024</h2>
            <p className="timerange">às 18:25 - horário de Brasília.</p>
            <p><span>smart TV - quarto da Maria</span>: está ligada a aproximadamente uma hora agora o que daria um gasto médio de</p>
            <p className="highlighted-value">R$ 0,14 reais.</p>
            <p><span>smart TV - sala de estar</span>: está ligada a aproximadamente quatro horas agora o que daria um gasto médio de</p>
            <p className="highlighted-value">R$ 0,28 reais.</p>
          </div>

        </div>
      </div>
      <div className="section" id="dispositivos-section">
        <Dispositivos />
      </div>
      <div className="section" id="consumo-section">
        <Consumo />
      </div>
    </Styles>
  );
}

export default Dashboard;
