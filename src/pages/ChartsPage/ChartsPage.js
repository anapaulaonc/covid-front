import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import StateList from '../../components/StateList';
import SearchBar from '../../components/SearchBar';

const ChartsPage = () => {
  const {id}= useParams()
  const [datas, setData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3000/states/${id}`)
      .then(res =>{
        setData(res.data);  
        console.log(res.data)
  
      }).catch(error => {console.log(error)})
  },[])

  return (
    <div className="ChartsPage">
      <h1>COVID 19</h1>
      <SearchBar />
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
            
    </div>
  );
  
}

export default ChartsPage;