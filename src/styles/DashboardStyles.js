import styled from 'styled-components';

export const Styles = styled.div`
  font-family: "Kanit", sans-serif;
  font-family: "Montserrat", sans-serif;
  color: black;

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    padding: 5px 0; /* Ajuste da altura do menu */
    z-index: 1000;
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    gap: 5px; /* Redução do espaço entre os itens do menu */
  }

  h1 {
  margin-top: 100px;
    text-align: center;
    font-size: 45px;
  }

  p {
    text-align: center;
    font-size: 20px;
    margin: 5px 0 0 0; /* Remoção de margens automáticas */
    padding: 0 50px; /* Remoção de espaçamentos desnecessários */
  }

  .timerange {
    font-size: 25px;
    color: grey;
    font-weight: 500;
    margin-bottom: 20px;
    font-family: "Kanit", sans-serif;
  }

  span {
    color: #ffb700;
    font-weight: 700;
  }

  h2 {
    text-align: center;
    font-size: 40px;
    margin: 20px 0 0 0; /* Apenas margem superior */
    padding: 0; /* Remoção de espaçamentos internos */
  }

  .menu-item {
    padding: 5px 5px; /* Redução do padding para tornar o menu mais compacto */
    cursor: pointer;
    font-weight: 700;
    &:hover {
      background-color: #ffb700;
      border-radius: 5px;
    }
  }

  .section {
    margin-top: 20px; /* Redução da margem superior */
    height: 100vh; /* Ocupa toda a altura da tela */
    padding: 20px;
    box-sizing: border-box;
  }

  .data-grid {
    display: flex;
    justify-content: space-between;
    gap: 10px; /* Controle do espaçamento entre colunas */
  }

  .data-column {
    width: 49%; /* Ajuste da largura para evitar grandes lacunas */
  }

  .highlighted-value {
    font-weight: bold;
    color: #ffb700;
    font-size: 50px;
    font-family: "Kanit", sans-serif;
  }

  .logout-button {
    background-color: #ff5733;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0; /* Remoção de margens desnecessárias */
    cursor: pointer;
    &:hover {
      background-color: #e74c3c;
    }
  }
`;
