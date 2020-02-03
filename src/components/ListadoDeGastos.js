import React, {Component} from 'react'

class ListadoDeGastos extends Component {
    constructor(props) {
        super(props); /* Ejecute el constructor de la clase padre, en este caso la clase Component */
        var gastos = [
            {
                concepto: "Super",
                monto: "5000"
            },
            {
                concepto: "Nafta",
                monto: "1000"
            }
        ];
        this.state = {
            gastos: gastos
        };
    }

    render() {
        return (
            <ul>
                <li>{this.state.gastos[0].concepto} {this.state.gastos[0].monto}</li>
                <li>{this.state.gastos[1].concepto} {this.state.gastos[1].monto}</li>
            </ul>
        )
    }

    handleChange() {
        // this.setState({gastos: {}})
    }

    handleSubmit() {

    }
}

export default ListadoDeGastos