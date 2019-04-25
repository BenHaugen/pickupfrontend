import React from 'react'

class UserLogin extends React.Component {
  render() {
    return (
      <div className="ui segment">
      <form className="ui form" onSubmit={ev => this.props.logMeIn(ev)}>
      <h4 className="ui dividing header">Enter User Credentials </h4>
        <div className="field">
          <input type="text" name="userName" placeholder="Enter Username"/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      </div>
    )
  }

}

export default UserLogin

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import HomePage from './containers/HomePage'
// import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
// import BasketballGames from './components/BasketballGames'
// import GolfGames from './components/GolfGames'
// import SoccerGames from './components/SoccerGames'
// import BaseballGames from './components/BaseballGames'
// // import Facebook from './components/Facebook'
//
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route path="/basketball" component={BasketballGames} />
//         <Route path="/golf" component={GolfGames} />
//         <Route path="/soccer" component={SoccerGames} />
//         <Route path="/baseball" component={BaseballGames} />
//       </Router>
//       <header className="App-header">
//         <h1 className="App-title">PickUp</h1>
//         </header>
//
//         <HomePage />
//
//     </div>
//   );
// }
//
// export default App;
