import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    

    //No se puede utilizar hooks de manera condicional


    const [formstate, setFormstate] = useState({
        name: '',
        email: ''
    });
    
    
    const {name,email} = formstate;
    
    useEffect(  () => {
      //  console.log('hola')

    }, []);


    useEffect(  () => {
     // //  console.log('formState cambio')
    }, [formstate]);


    useEffect(  () => {
     //   console.log('email cambio')
    }, [email]);

    const handleInputchange  =({target})=>{
     
      
       setFormstate({
           ...formstate,
            [target.name]: target.value
       });
    }
  
    return (
        <>
          <h1>useEffect</h1>
          <hr/> 
          <div className="form-group">
              <input type="text" name="name" 
              className="form-control"
              placeholder="tu nombre"
              autoComplete="off"
              value={name}
              onChange={handleInputchange}
              />
          </div>
           
          <div className="form-group">
              <input type="text" 
              name="email" 
              className="form-control"
              placeholder="email@hotmail.com"
              autoComplete="off"
              value={email}
              onChange={handleInputchange}
              />
          </div>
           

           { (name==='andres') && <Message />}
        </>
    )
}
