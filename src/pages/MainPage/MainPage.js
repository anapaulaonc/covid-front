import React from 'react';
import './MainPage.css';

import StateList from '../../components/StateList';
import SearchBar from '../../components/SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <h1>COVID 19</h1>
        <SearchBar />
        <StateList /> 
      </div>
    );
  }
}

export default MainPage;