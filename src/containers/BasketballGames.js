import React, { Component } from 'react';
import CityDropdown from '../components/CityDropdown'
import GameCard from '../components/GameCard'

class BasketballGames extends Component {

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <div>
          <CityDropdown filterCities={this.props.filterBasketballCities}/>
        </div>
        <div className="ui segment" id="basketballCardBackground">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    {this.props.displayBasketballGames.map((game, id) => {
                        return <GameCard confirmed={this.props.confirmed} game={game} key={id} increasePlayers={this.props.increasePlayers} confirmGame={this.props.confirmGame}/>
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

export default BasketballGames;
