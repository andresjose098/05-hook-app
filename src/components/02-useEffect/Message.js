
import React, { useEffect ,useState} from 'react'

export const Message = () => {
   

    const [coords, setCoords] = useState({x:0  , y:0  })
    const [state, setstate] = useState(0);
     

    const{x,y} = coords;

   useEffect(() => {
       

    const mouseMove =(e) =>{
     const coords = {x: e.x,y: e.y};
   setCoords(coords);
      
    }


    const click =(e) =>{
       
       setstate(state*2);
    }

    window.addEventListener('mousemove', mouseMove);
    
    window.addEventListener('click',click)
       return () => {
          window.removeEventListener('mousemove',mouseMove);
          window.removeEventListener('click',click);
       }
   }, [])
   
   
    return (
        <div>
            <h3>Eres genial!</h3>

            <p>
                x: {x} , y: {y}
            </p>

            <h1>a {state}</h1>
        </div>
    )
}
