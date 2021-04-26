import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import './Table.css';



const  Table = () => {

  const [states, setState] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3000/states/`)
      .then(res =>{
        setState(res.data);  
        console.log(res.data)
  
      }).catch(error => {console.log(error)})
  },[])
  let history = useHistory()
    
    return (
      <div className="Table">
        <div className="each-table">
        <table className="table-information" >
        <tr>
            <th>Estado</th>
            <th>Casos</th>
            <th>Mortes</th>
            <th>Suspeitas</th>
            <th>Data</th>
        </tr>
        {(states!==[])&&
            states.map( 
                (state) =>{                
                  return(
                    <>
                      <tr>  
                        <td>{`${state.name} (${state.initials})`} </td>
                        <td>{state.cases}</td>
                        <td>{state.deaths}</td>
                        <td>{state.suspects}</td>
                        <td>{state.datetime}</td>
                      </tr>
                    
                    </>
                )
                }) 

        }
        </table>
      </div>          
            
      </div>
    )

}

export default Table;