import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let gastos = [
  {
      concepto: "Supermercado",
      monto: "5000"
  },
  {
      concepto: "Nafta",
      monto: "1000"
  }
];

ReactDOM.render(
  <App items={gastos} />,
  document.getElementById('root')
);
