import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import './State.css';



const  State = () => {

  const [states, setState] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3000/states`)
      .then(res =>{
        setState(res.data);  
        console.log(res.data)
  
      }).catch(error => {console.log(error)})
  },[])
  let history = useHistory()
  


  
    return (
      <div className="State">
        {(states!==[])&&
            states.map( 
                (state) =>{                
                  return(
                    <>
                    <div className="state-information" key={state.id}>
                      <h2>{state.initials} </h2>
                      <p>{state.name} </p>
                      <p>{`Casos: ${state.cases}`}</p>
                      <p>{`Mortes: ${state.deaths}`}</p>
                      <p>{`Suspeitas: ${state.suspects}`}</p>
                      <p>{state.datetime}</p>
                    </div>
                    </>
                )
                }) 
            
        }
      </div>
    )

}

export default State;