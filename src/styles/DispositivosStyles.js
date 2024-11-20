import styled from 'styled-components';

export const Styles = styled.div`
  padding: 20px;
  font-family: "Montserrat", sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #ffb700;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 2px solid #ccc;
    background-color: white;
    color:black;
  }

  button {
    padding: 5px 10px;
    background-color: white;
    color: red;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    border: 2px solid black;
  }

  .device-list {
    margin-top: 20px;
    backgroud-color: pink;
    color: black;
  }

  .device-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #ccc;
    color: black;
  }

  .edit-button {
    background-color: #f1f1f1;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    color: black;
  }
`;
