import React from 'react';
import { Styles } from "../styles/ConsumoStyles";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

const dailyData = [
  { name: '23 Nov', value: 25000 },
  { name: '24 Nov', value: 30000 },
  { name: '25 Nov', value: 35000 },
  { name: '26 Nov', value: 40000 },
  { name: '27 Nov', value: 45000 },
  { name: '28 Nov', value: 47000 },
  { name: '29 Nov', value: 50000 },
];

const monthlyData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 350 },
  { name: 'Jun', value: 400 },
  { name: 'Jul', value: 350 },
  { name: 'Aug', value: 300 },
  { name: 'Sep', value: 250 },
  { name: 'Oct', value: 200 },
  { name: 'Nov', value: 150 },
  { name: 'Dec', value: 100 },
];

const Consumo = () => {
  return (
    <Styles>
      <div className="container">
        <div className="summary">
          <div className="card">
            <h2 className="card-title">Valor da conta de luz:</h2>
            <p className="card-value">R$ 100,00</p>
            <p className="card-description">Valor que apenas dispositivos IoT gastaram.</p>
          </div>
          <div className="card">
            <h2 className="card-title">Aumento comparado com mês anterior:</h2>
            <p className="card-value">R$ 10,00</p>
            <p className="card-description">Aumento de 10 reais entre março e abril.</p>
          </div>
        </div>

        <div className="main-content">
          <div className="chart">
            <h3 className="chart-title">Gráfico de consumo diário</h3>
            <LineChart width={1000} height={300} data={dailyData}>
              <Line type="monotone" dataKey="value" stroke="#ffb700" strokeWidth={2} />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
          <div className="table">
            <h3 className="chart-title">Consumo por dispositivo</h3>
            <table>
              <thead>
                <tr>
                  <th>Fonte</th>
                  <th>Valor Mês</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smart TV - quarto Maria</td>
                  <td>R$20,50</td>
                </tr>
                <tr>
                  <td>Smart TV - sala de estar</td>
                  <td>R$35,50</td>
                </tr>
                <tr>
                  <td>Alexa - sala de estar</td>
                  <td>R$5,50</td>
                </tr>
                <tr>
                  <td>Alexa - quarto Maria</td>
                  <td>R$5,50</td>
                </tr>
                <tr>
                  <td>Cortina Automática da sala</td>
                  <td>R$5,50</td>
                </tr>
                <tr>
                  <td>Máquina de Lavar</td>
                  <td>R$22,00</td>
                </tr>
                <tr>
                  <td>Smart Lock porta principal</td>
                  <td>R$5,50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="monthly-chart">
          <h3 className="chart-title">Gráfico de gastos de cada mês do ano de 2024</h3>
          <BarChart width={1600} height={200} data={monthlyData}>
            <Bar dataKey="value" fill="#ffb700" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </Styles>
  );
};

export default Consumo;
