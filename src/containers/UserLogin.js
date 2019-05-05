import React from 'react'

class UserLogin extends React.Component {
  render() {
    return (
      <div id="loginParentDiv">
      <form className="ui form" id="loginForm" onSubmit={ev => this.props.logMeIn(ev)}>
      <h4 className="ui dividing header">Enter User Credentials </h4>
        <div className="field">
          <input type="text" name="userName" placeholder="Enter Username"/>
        </div>
        <div className="field">
          <input type="password" name="password" placeholder="Enter Password" autoComplete="password"/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      <br></br>
      <div>

      </div>
      </div>
    )
  }

}

export default UserLogin
// <iframe src="https://giphy.com/embed/h8QCG6dRwDcGY" title="bball gif" width="480" height="273" frameBorder="0" className="giphy" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dunks-h8QCG6dRwDcGY">via GIPHY</a></p>

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
