import styled from 'styled-components';

export const Container = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    font-family: "Quicksand", sans-serif;

  h1 {
    font-size: 80px;
    margin-bottom: 10px;
    color: black;
  }

    p {
        font-size: 22px;
        font-weight: 500;
        color: #666;
    }

  input {
    padding: 10px;
    font-size: 18px;
    margin: 8px 0;
    width: 100%;
    max-width: 280px;
    border-radius: 4px;
    border: 3px solid black;
    box-sizing: border-box;
    height: 40px;
  }

  label {
    font-size: 16px;
    font-weight: 480;
    color: black;
  }

  button {
    padding: 10px;
    font-size: 19px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 280px;
    border-radius: 4px;
    margin: 8px 0;
    height: 40px;
    font-weight: 500;
  }
`;
