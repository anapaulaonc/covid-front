import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';


const SearchBar = () =>{
  const [states, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);

  let history = useHistory() 

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/states`)
    .then(res =>{
      setState(res.data); 
      setLoading(false); 
    })
    .catch(error => {
      setLoading(false);
      console.log(error);
    });
  },[]);

  const lowerSearch = search.toLocaleLowerCase()

  useEffect(() => {
    setFilteredStates(
      states.filter((state) =>
        state.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, states]);

  if (loading) {
    return <p>Loading states...</p>
  }

    return (
      <div className="SearchBar">
        
        <div className="SearchBar-fields">
          <input className="" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <ul className="Search-informations">            
          {(filteredStates.map( (state) =>{     
                  return (
                    <div className="Search-information" key={state.id}>
                      <div className="option" onClick={() => history.push(`/charts/${state.id}`) }>{state.name}</div>
                    </div>
                  )                                  
              })             
          )}
          </ul>
        </div>
        <div className="SearchBar-submit">
          <a>Pesquisar</a>
        </div>

      </div>
    );
    
}

export default SearchBar;