import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <li>
		{ props.name }
	        <div>status: { status ? <div>Finalizado</div> : <div>Não Finalizado</div> } </div>
	  </li>
}

