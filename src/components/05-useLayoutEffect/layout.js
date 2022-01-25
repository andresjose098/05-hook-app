import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'





export const Layout = () => {

    const {countera,increment}= useCounter(1);
   const {data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${countera}`);
  // console.log(state);
   const { quote} = !!data && data[0];
 

   const pTag = useRef();

   const [boxSize, setBoxSize] = useState({});


   useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());
   }, [quote])
  
  return (
        <div>
            <h1>Layout Effect</h1>
            <hr />


                
                    <div className="alert alert-info text-center">
                    Loading...
                 </div>
     
                
                    
            <blockquote className="blockquote text-right">
            <p className="mb-0" ref={pTag}>
                {quote}</p>
            <br/>
          
        </blockquote>

                <pre>
                        {JSON.stringify(boxSize, null , 3)}
                </pre>  
            

            <buttton className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </buttton>
        

        
        
        </div>
    )
}
