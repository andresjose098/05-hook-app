import React, { useEffect, useRef, useState } from 'react';


export const useFetch = (url) => {


    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null , loading: true, error: null});


    useEffect(() => {
    
        return () =>{
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        

        setstate({data:null , loading:true, error:null});
        fetch(url)
            .then (resp => resp.json())
            .then (data =>{
               
            
            setTimeout(() => {
                if(isMounted.current){
                setstate({
                        loading:false,
                        error: null,
                        data
                    })
                }else{
                    console.log('setState no se llamo');
                }

                }, 2000);
              
            })


    }, [url])

    return state;
}
