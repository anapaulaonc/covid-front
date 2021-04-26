import React from 'react';
import './MainPage.css';

import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table/Table';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <h1>COVID 19</h1>
        <SearchBar />
        <Table/>
      </div>
    );
  }
}

export default MainPage;