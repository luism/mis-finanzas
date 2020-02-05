// Packages
import React from 'react'

// Components
import Gasto from '../components/Gasto'

const ListadoDeGastos = function(props) {
    let gastos = props.expenseList

    const listadoDeGastos = gastos.map(function(gasto, i){
        return (
            <Gasto key={i} concepto={gasto.concepto}
                   monto={gasto.monto}
            />
        );
    })

    return (
        <div>
            <ul>
                {listadoDeGastos}
            </ul>
        </div>
    )

}

export default ListadoDeGastos