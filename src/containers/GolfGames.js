import React, { Component } from 'react';
import CityDropdown from '../components/CityDropdown'
import GameCard from '../components/GameCard'

class GolfGames extends Component {

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <div>
          <CityDropdown filterCities={this.props.filterGolfCities}/>
        </div>
        <div className="ui segment" id="golfCardBackground">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    {this.props.displayGolfGames.map((game, id) => {
                        return <GameCard game={game} key={id} increasePlayers={this.props.increasePlayers}/>
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default GolfGames;
