//Packages
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Componentes
import Header from './components/Header'
import Gastos from './components/Gastos'
import AboutUs from './components/AboutUs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      expenseList: props.items || [], // A prop.items le diremos que tiene que ser un Array, con el PropType
      total: props.total || 0
    };
    this.updateTotal = this.updateTotal.bind(this)
    this.addExpense = this.addExpense.bind(this)
  }

  render() {
    let expenseList = this.state.expenseList
    if(this.state.isLoading) {
      return (
        <p>Loading ...</p>
      )
    }
    return (
      <Router>
        <Header />

          <Switch>
            <Route exact path="/">
              <Gastos addNewExpense={this.addExpense}
                      expenseList={expenseList} />
            </Route>
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
          </Switch>
        </Router>
        );
  }
    
  addExpense(expense) {
    let expenseList = this.state.expenseList
    expenseList.push(expense)
    this.setState({expenseList})
  }
    
  updateTotal() {}

  componentDidMount() {
    console.log('Componen did mount')
    this.setState({...this.state, isLoading: true });
    fetch("gastos.js").then(
      (response) => {
        console.log('Datos ok')
        return response.json();
      }
    ).then(
      (json) => {
        console.log('ahora cargamos ...')
        let count = json ? json.length : 0;
        this.setState({
          ...this.state,
          isLoading: false,
          expenseList: json || [], // A prop.items le diremos que tiene que ser un Array, con el PropType
          total: count
        });
      }
    ).catch(() => console.log('Error'))
  }

}
        
export default App;
