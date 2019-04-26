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
          <CityDropdown chooseGameByCity={this.props.chooseGameByCity}/>
        </div>
        <div className="ui segment inverted">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    <ul>{this.props.displayBasketballGames.map((game, id) => {
                        return <GameCard game={game} key={id} />
                      })}</ul>
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
