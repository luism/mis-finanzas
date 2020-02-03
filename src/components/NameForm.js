import React, {Component} from 'react'
import { Button } from 'react-bootstrap'

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                concepto: '',
                monto: 0
            }
        };
        this.handleChange.bind(this)
        this.handleSubmit.bind(this)
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
                <Button variant='primary'>Submit</Button>
            </form>
        );
    }
}

export default NameForm;