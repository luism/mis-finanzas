// Packages
import React from 'react';

const Gasto = function(props) {
    let monto = props.monto;
    let concepto = props.concepto;

    return (
        <li>
            <p>{concepto}: {monto}</p>
        </li>
    )
}

export default Gasto;