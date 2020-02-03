import React, {Component} from 'react'
import { Button } from 'react-bootstrap'

class AgregarGastoForm extends Component {
    constructor(props) {
        super(props)
        this.status = {
            value: {
                concepto: '',
                monto: 0
            }
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.prevenDefault();
    }

    render() {
        return (
            <form className='' onSubmit={this.handleSubmit}>
                <label>
                    Concepto:
                    <input type='text' value={this.state.value.concepto} onChange={this.handleChange} />
                </label>
                <label>
                    Monto:
                    <input type='text' value={this.state.value.monto} onChange={this.handleChange} />
                </label>
                <Button variant='primary' onSubmit={this.props.addNewExpense}>Submit</Button>
            </form>
        );
    }
}

AgregarGastoForm.propTypes = {
    addNewExpense = PropTypes.func
}

export default AgregarGastoForm;