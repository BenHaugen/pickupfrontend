import React, { Component } from 'react';
import CityDropdown from '../components/CityDropdown'

class BaseballGames extends Component {

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <div>
          <CityDropdown chooseGameByCity={this.props.chooseGameByCity}/>
        </div>
      </div>
    );
  }

}

export default BaseballGames;
