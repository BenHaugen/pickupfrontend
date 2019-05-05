import React, { Component} from 'react';
import OrganizeGameButton from '../components/OrganizeGameButton'
import SearchSports from '../components/SearchSports'
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import CityDropdown from '../components/CityDropdown'
// import BasketballGames from '../components/BasketballGames'
// import GolfGames from '../components/GolfGames'
// import SoccerGames from '../components/SoccerGames'
// import BaseballGames from '../components/BaseballGames'
// import CreateGameForm from '../components/CreateGameForm'
// import GameCard from '../components/GameCard'
// import UserLogin from './UserLogin'

class HomePage extends Component {

  render() {

    return (
    <div>
      <div>
        <SearchSports showBasketballCards={this.props.showBasketballCards}
                      showGolfCards={this.props.showGolfCards}
                      showSoccerCards={this.props.showSoccerCards}
                      showBaseballCards={this.props.showBaseballCards}
                      handleMyCreatedGames={this.props.handleMyCreatedGames}
                      handleMyUpcomingGames={this.props.handleMyUpcomingGames}
                      logMeOut={this.props.logMeOut}/>
      </div>
      <div>
        <OrganizeGameButton organizeGame={this.props.organizeGame}/>
      </div>
      <div>

      </div>

    </div>
    )
  }
}

export default HomePage
