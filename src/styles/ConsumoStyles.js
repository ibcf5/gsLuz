import styled from 'styled-components';

export const Styles = styled.div`
  .container {
    font-family: "Montserrat", sans-serif;
    padding: 20px;
  }


  .summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .card {
    flex: 1;
    margin-right: 5px;
    padding: 3px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
  }

  .card-value {
    font-size: 30px;
    color: #ffb70;
    margin: 10px 0;
  }

  .card-description {
    font-size: 14px;
    color: #666;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .chart {
    flex: 2;
    margin-right: 20px;
  }

  .table {
    flex: 1;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  .monthly-chart {
    margin-top: 20px;
  }
`;
