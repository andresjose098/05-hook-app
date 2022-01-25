import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import {MultipleCustonHooks} from '../03-examples/MultipleCustonHooks';

export const RealExampleRef = () => {

    const [show, setshow] = useState(false)
    return (
        <div>
         <h1>RealExmple</h1>

         <hr/>
         {show && <MultipleCustonHooks/> }

         <button
         className="btn btn-primary mt-5"
         onClick={() =>{
             setshow( !show);
         }}
         >
             SHOW/HIDE

         </button>
       
        </div>
    )
}
