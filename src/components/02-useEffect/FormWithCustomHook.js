import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const  FormWithCustomHook= () => {
    

    //No se puede utilizar hooks de manera condicional


    const [formstate, handleInputchange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    
    const {name,email,password} = formstate;
    
    useEffect(  () => {
      console.log('email cambio')
       
    }, [email]);

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(formstate);
    }
  
    return (
        <form onSubmit={handleSumbit}>
          <h1>FormWithCustomHook</h1>
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


          <div className="form-group">
              <input type="password" 
              name="password" 
              className="form-control"
              placeholder="****"
              value={password}
              onChange={handleInputchange}
              />
          </div>
           
           
            <button type="submit" className="btn btn-primary">
            Guardar
            </button>
         
        </form>
    )
}
