import React from 'react'
// import BasketballGames from '../containers/BasketballGames'
// import GolfGames from '../containers/GolfGames'
// import SoccerGames from '../containers/SoccerGames'
// import BaseballGames from '../containers/BaseballGames'
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const SearchSports = props => {


  return (
    <div>
    <div>
    <button className="navBarButtons" onClick={(ev) => props.logMeOut(ev)}>Log Out</button><button className="navBarButtons" onClick={(ev) => props.handleMyUpcomingGames(ev)}>My Upcoming Games</button><button type="submit" className="navBarButtons" onClick={() => props.handleMyCreatedGames(props.game)}>My Created Games</button>
    </div>
    <br></br>
      <div>
        <h2 className='ui header'>
          Welcome to Pickup! Choose Your Sport!
        </h2>
      </div>
      <div className="nav">
        <ul>
          <li><button onClick={(ev) => props.showBasketballCards(ev)} className="searchButtons" type="submit">Basketball <span role="img" className="emoji" aria-label="basketball">🏀</span></button></li>
          <li><button onClick={(ev) => props.showGolfCards(ev)} className="searchButtons" type='submit'>Golf<span role="img" aria-label="golf">⛳</span></button></li>
          <li><button onClick={(ev) => props.showSoccerCards(ev)} className="searchButtons" type='submit'>Soccer<span role="img" aria-label="soccer">⚽</span></button></li>
          <li><button onClick={(ev) => props.showBaseballCards(ev)} className="searchButtons" type='submit'>Baseball<span role="img" aria-label="baseball">⚾</span></button></li>
        </ul>
      </div>
    </div>
    )
  }

export default SearchSports

// return (
//   <div>
//     <div>
//       <h2 className='ui header'>
//         Welcome to Pickup! Choose Your Sport!
//       </h2>
//     </div>
//     <div className="nav">
//     <Router>
//       <ul>
//         <li><NavLink to='/basketball'>Basketball</NavLink></li>
//         <li><NavLink to='/golf'>Golf</NavLink></li>
//         <li><NavLink to='/soccer'>Soccer</NavLink></li>
//         <li><NavLink to='/baseball'>Baseball</NavLink></li>
//       </ul>
//       <Route path="/basketball" component={BasketballGames} />
//       <Route path="/golf" component={GolfGames} />
//       <Route path="/soccer" component={SoccerGames} />
//       <Route path="/baseball" component={BaseballGames} />
//     </Router>
//     </div>
//   </div>
//   )
