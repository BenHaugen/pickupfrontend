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
          <CityDropdown chooseGameByCity={this.props.chooseGameByCity}/>
        </div>
        <div className="ui segment inverted">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    {this.props.displayBasketballGames.map((game, id) => {
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
