import React from 'react';
import ListadoDeGastos from './ListadoDeGastos';
import AgregarGastoForm from './AgregarGastoForm'

const Gastos = (props) => {
    return (
        <div>
            <AgregarGastoForm
                addNewExpense={props.addNewExpense} />
            <ListadoDeGastos
                expenseList={props.expenseList} />
        </div>
    );
}

export default Gastos;