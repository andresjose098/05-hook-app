

import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    
    const [state, setstate] = useState({
        contador: 10000,
        contador2: 12000
    });

    const {contador,contador2} = state;
    
    return (

        
        
        <div>
            <h1>contador {contador}</h1>
            <h2>segundo contador {contador2}</h2>
            <button type="button" class="btn btn-success" onClick=  {()=>{
                setstate({
                    ...state,
                    contador:contador+2
                })
            }}>+2</button>
        </div>
      
    )
}


