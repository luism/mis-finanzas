import React, { Component } from 'react';
import Header from './components/Header'
import AgregarGastoForm from './components/AgregarGastoForm'
import ListadoDeGastos from './components/ListadoDeGastos'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor() {
    super(props);
    this.state = {
        items: props.items || [],
        total: props.total || 0
    };
    this.updateTotal.bind(this)
    this.addNewExpense.bind(this)
  }

  render() {
    return (
      <div className='content'>
        <Header />
        <AgregarGastoForm addNewExpense={this.addNewExpense} />
        <ListadoDeGastos />
      </div>
    );
  }

  addNewExpense() {

  }
}

export default App;
