//Packages
import React, { Component } from 'react';

// Componentes
import Header from './components/Header'
import AgregarGastoForm from './components/AgregarGastoForm'
import ListadoDeGastos from './components/ListadoDeGastos'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        expenseList: props.items || [], // A prop.items le diremos que tiene que ser un Array, con el PropType
        total: props.total || 0
    };
    this.updateTotal = this.updateTotal.bind(this)
    this.addExpense = this.addExpense.bind(this)
  }

  render() {
    let expenseList = this.state.expenseList
    return (
      <div className='content'>
        <Header />
        <AgregarGastoForm addNewExpense={this.addExpense} />
        <ListadoDeGastos expenseList={expenseList} />
      </div>
    );
  }

  addExpense(expense) {
    let expenseList = this.state.expenseList
    expenseList.push(expense)
    this.setState({expenseList})
  }

  updateTotal() {

  }
}

export default App;
