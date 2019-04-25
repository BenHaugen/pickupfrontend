import React, { Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import CityDropdown from '../components/CityDropdown'
import BasketballGames from '../components/BasketballGames'
import GolfGames from '../components/GolfGames'
import SoccerGames from '../components/SoccerGames'
import BaseballGames from '../components/BaseballGames'
import CreateGameForm from '../components/CreateGameForm'
// import GameCard from '../components/GameCard'
// import UserLogin from './UserLogin'

class HomePage extends Component {

  render() {

    return (
    <div>
      <div>
        <h2 className='ui header'>
          Welcome to Pickup! Choose Your Sport!
        </h2>
      </div>
      <div className="nav">
      <Router>
        <ul>
          <li><NavLink to='/basketball'>Basketball</NavLink></li>
          <li><NavLink to='/golf'>Golf</NavLink></li>
          <li><NavLink to='/soccer'>Soccer</NavLink></li>
          <li><NavLink to='/baseball'>Baseball</NavLink></li>
        </ul>
        <Route path="/basketball" component={BasketballGames} />
        <Route path="/golf" component={GolfGames} />
        <Route path="/soccer" component={SoccerGames} />
        <Route path="/baseball" component={BaseballGames} />
      </Router>
      </div>
      <div>
        <h2 className='ui header'>
          Search by City
        </h2>
      </div>
      <div>
        <CityDropdown chooseGameByCity={this.props.chooseGameByCity}/>
      </div>
      <div>
        <h2 className="ui header">
        Want to Organize a Game?
        </h2>
      <div>
        <button className="ui button" type="submit">Organize</button>
      </div>
      <CreateGameForm createBasketballGame={this.props.createBasketballGame}/>
      </div>

    </div>
    )
  }
}

export default HomePage
