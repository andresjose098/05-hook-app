
import React, { useState } from 'react';
import { useMemo } from 'react/cjs/react.development';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css'

import {procesoPesado} from '../../helpers/procesoPesado';


 
export const MemoHook = () => {
    
    const{countera, increment} =useCounter(4000);
    const [show , setShow] = useState(true);
    
   
    const memoProcesoPesado =  useMemo( () => procesoPesado(countera),[countera])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:<small>{countera}</small></h3>
            <hr />

            <p>{memoProcesoPesado }</p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-3" onClick={()=>{
                setShow(!show)
            }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
