import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'





export const MultipleCustonHooks = () => {

    const {countera,increment}= useCounter(1);
   const {loading,data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${countera}`);
  // console.log(state);
   const {author, quote} = !!data && data[0];

  console.log(author,quote)
  return (
        <div>
            <h1>BReakingBad Quotes</h1>
            <hr />


            {
                loading
                ?
                (
                    <div className="alert alert-info text-center">
                    Loading...
                 </div>
     
                )
            :

                (
                    
            <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <br/>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>

                )
            }

            <buttton className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </buttton>
        

        
        
        </div>
    )
}
