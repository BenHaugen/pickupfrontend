import React from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import OrganizeGames from './containers/OrganizeGames'
import BasketballGames from './containers/BasketballGames'
import GolfGames from './containers/GolfGames'
import SoccerGames from './containers/SoccerGames'
import BaseballGames from './containers/BaseballGames'
// import Facebook from './components/Facebook'

class App extends React.Component {

  state = {
    displayBasketballGames: [],
    displayGolfGames: [],
    displaySoccerGames: [],
    displayBaseballGames: [],
    showCreateForm: false,
    showBasketballGames: false,
    showGolfGames: false,
    showSoccerGames: false,
    showBaseballGames: false,
    showHomePage: false
  }

  homePageClick = (ev) => {
    console.log('go home')
    this.setState({
      showCreateForm: false,
      showBasketballGames: false,
      showGolfGames: false,
      showSoccerGames: false,
      showBaseballGames: false,
      showHomePage: true
    })

  }

  createBasketballGame = (ev) => {
    alert("Game successfully created. To view game, visit the 'Basketball' section")
    ev.preventDefault()
    // console.log(ev.target.sport.value)
    // console.log(ev.target.city.value)
    // console.log(ev.target.address.value)
    // console.log(ev.target.date.value)
    // console.log(ev.target.price.value)
    // console.log(ev.target.contact.value)
    let newGame = {
      sport: ev.target.sport.value,
      city: ev.target.city.value,
      address: ev.target.address.value,
      date: ev.target.date.value,
      price: ev.target.price.value,
      contact: ev.target.contact.value,
      confirmedPlayers: ev.target.confirmedPlayers.value
    }
    this.setState({
      displayBasketballGames: [...this.state.displayBasketballGames, newGame]
    })
  }

  increasePlayers = (ev) => {
    console.log('increase')
    this.setState({
      //what goes here?
    })
  }

  organizeGame = (ev) => {
    // console.log('pressed')
    this.setState({
      showCreateForm: true
    })
  }

  showBasketballCards = (ev) => {
    console.log('basketball')
    this.setState({
      showBasketballGames: true
    })
  }

  showGolfCards = (ev) => {
    console.log('golf')
    this.setState({
      showGolfGames: true
    })
  }

  showSoccerCards = (ev) => {
    console.log('soccer')
    this.setState({
      showSoccerGames: true
    })
  }

  showBaseballCards = (ev) => {
    console.log('baseball')
    this.setState({
      showBaseballGames: true
    })
  }

  chooseGameByCity = (ev) => {
    ev.preventDefault()
    console.log(ev.target.cities.value)
  }

  render() {
    let currentDisplay;
    if (this.state.showCreateForm !== false) {
      currentDisplay = <OrganizeGames homePageClick={this.homePageClick} createBasketballGame={this.createBasketballGame}/>
    }
    else if (this.state.showBasketballGames !== false) {
      currentDisplay = <BasketballGames homePageClick={this.homePageClick} displayBasketballGames={this.state.displayBasketballGames} increasePlayers={this.increasePlayers}/>
    }
    else if (this.state.showGolfGames !== false) {
      currentDisplay = <GolfGames homePageClick={this.homePageClick} displayBasketballGames={this.state.displayBasketballGames} increasePlayers={this.increasePlayers}/>
    }
    else if (this.state.showSoccerGames !== false) {
      currentDisplay = <SoccerGames homePageClick={this.homePageClick} displayBasketballGames={this.state.displayBasketballGames} increasePlayers={this.increasePlayers}/>
    }
    else if (this.state.showBaseballGames !== false) {
      currentDisplay = <BaseballGames homePageClick={this.homePageClick} displayBasketballGames={this.state.displayBasketballGames} increasePlayers={this.increasePlayers}/>
    }
    else if (this.state.showHomePage !== false) {
      currentDisplay = <HomePage chooseGameByCity={this.chooseGameByCity} organizeGame={this.organizeGame}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}/>
    }
    else {
      currentDisplay = <HomePage chooseGameByCity={this.chooseGameByCity} organizeGame={this.organizeGame}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}/>
    }
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PickUp</h1>
          </header>
          {currentDisplay}
      </div>
    );
  }
}

export default App;

// <p className="App-intro">To get started, authenticate with Facebook</p>
// <Facebook />

// render() {
//   return (
//
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">PickUp</h1>
//         </header>
//
//         {this.state.showCreateForm === false ?
//           <HomePage chooseGameByCity={this.chooseGameByCity} createBasketballGame={this.createBasketballGame} organizeGame={this.organizeGame}/>
//           :
//           <OrganizeGames />}
//
//     </div>
//   );
// }
