import { useState } from 'react';



export const useCounter = (initialState = 100) => {
    
    const [countera, setCounter] = useState(initialState)

    const increment= () =>{
        setCounter(countera+1);
    }

    const decrement= () =>{
        setCounter(countera-1);
    }

    const reset = () =>{
        setCounter(initialState);
    }

    return {
        countera,
        increment,
        decrement,
        reset

    
};

}
