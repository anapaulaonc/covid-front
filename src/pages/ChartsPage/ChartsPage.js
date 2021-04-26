import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../../components/SearchBar';
import State from '../../components/State/State';

const ChartsPage = () => {


  return (
    <div className="ChartsPage">
      <h1>COVID 19</h1>
      <SearchBar />
      <State/>     
      
      <canvas id="chart" width="400" height="400"></canvas>
    </div>
  );
  
}

export default ChartsPage;