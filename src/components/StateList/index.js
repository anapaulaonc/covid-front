import React from 'react';
import './StateList.css';

import State from '../State/State';

class StateList extends React.Component {
  render() {
    return (
      <div className="StateList">
        <State />
      </div>
    );
  }
}

export default StateList;