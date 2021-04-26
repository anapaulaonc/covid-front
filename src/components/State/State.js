import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import './State.css';
import Charts from '../Charts/Charts';



const  State = () => {

  const {id}= useParams()
  const [datas, setData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3000/states/${id}`)
      .then(res =>{
        setData(res.data);  
        console.log(res.data)
  
      }).catch(error => {console.log(error)})
  },[id])
  let history = useHistory()
    
    return (
      <div className="State">
        <div className="each-state">
            <div className="state-information" key={datas.id}>
              <h2>{datas.initials} </h2>
              <p>{datas.name} </p>
              <p>{`Casos: ${datas.cases}`}</p>
              <p>{`Mortes: ${datas.deaths}`}</p>
              <p>{`Suspeitas: ${datas.suspects}`}</p>
              <p>{datas.datetime}</p>
            </div>
      </div>     
      <Charts initials={datas.initials}/>                 
      </div>
    )

}

export default State;