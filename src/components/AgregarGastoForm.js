import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class AgregarGastoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                concepto: '',
                monto: 0
        }
        this.handleChangeConcepto = this.handleChangeConcepto.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMonto(event) {
        let expense = {
            concepto: this.state.concepto,
            monto: event.target.value
        }
        this.setState(expense);
    }

    handleChangeConcepto(event) {
        let expense = {
            concepto: event.target.value,
            monto: this.state.monto
        }
        this.setState(expense);
    }

    handleSubmit(event) {
        event.preventDefault();
        let newExpense = {
            concepto: this.state.concepto,
            monto: this.state.monto
        }
        this.setState({monto: 0,  concepto:''})
        this.props.addNewExpense(newExpense);
    }

    render() {
        return (
            <form>
                <label>
                    Concepto:
                    <input type='text' value={this.state.concepto} onChange={this.handleChangeConcepto} />
                </label>
                <label>
                    Monto:
                    <input type='text' value={this.state.monto} onChange={this.handleChangeMonto} />
                </label>
                <Button variant='primary' onClick={this.handleSubmit}>Submit</Button>
            </form>
        );
    }
}

export default AgregarGastoForm;