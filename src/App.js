import React, { Component } from 'react';
import Header from './components/Header'
import ListadoDeGastos from './components/ListadoDeGastos'
import NameForm from './components/NameForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Header name="Pedro" />
        <ListadoDeGastos />
        <NameForm />
      </div>
    );
  }
}

export default App;
