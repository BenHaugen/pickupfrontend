import React from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import OrganizeGames from './containers/OrganizeGames'
import BasketballGames from './containers/BasketballGames'
import GolfGames from './containers/GolfGames'
import SoccerGames from './containers/SoccerGames'
import BaseballGames from './containers/BaseballGames'
import MyCreatedGames from './containers/MyCreatedGames'
import MyUpcomingGames from './containers/MyUpcomingGames'
import UserLogin from './containers/UserLogin'
// import Facebook from './components/Facebook'

class App extends React.Component {

  state = {
    allGames: [],
    basketballByCity: [],
    displayBasketballGames: [],
    displayGolfGames: [],
    displaySoccerGames: [],
    displayBaseballGames: [],
    displayMyCreatedGames: [],
    displayMyConfirmedGames: [],
    allConfirmedGames: [],
    showCreateForm: false,
    showBasketballGames: false,
    showGolfGames: false,
    showSoccerGames: false,
    showBaseballGames: false,
    showHomePage: false,
    myCreatedGames: false,
    showMyCreatedGames: false,
    showMyUpcomingGames: false,
    loggedIn: false,
    currentUser: '',
    name: '',
    password: '',
    confirmed: ''
  }

  homePageClick = (ev) => {
    this.setState({
      showCreateForm: false,
      showBasketballGames: false,
      showGolfGames: false,
      showSoccerGames: false,
      showBaseballGames: false,
      showMyCreatedGames: false,
      showMyUpcomingGames: false,
      showHomePage: true
    })
  }

  logMeIn = (ev) => {
    console.log('logging in')
    ev.preventDefault()
    let uservalue = ev.target.userName.value
    let passwordvalue = ev.target.password.value
    let data = {
      name: uservalue,
      password: passwordvalue
    }
    this.setState(data)
    this.setState({
      loggedIn: true
    })
    fetch('https://pickupbackend.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => this.setState({
      user_id: json.id
    }))
  }

  logMeOut = (ev) => {
    console.log("logging out")
    this.setState({
      loggedIn: false,
      showHomePage: false

    })
  }

  componentDidMount() {
    this.getConfirmedGames()
    fetch('https://pickupbackend.herokuapp.com/api/v1/organized_games')
    .then(response => response.json())
    .then(json => this.setState({allGames: json}, () => this.sortSports()))
    .catch(err => {
      console.log(err)
    })
  }

  getConfirmedGames = () => {
    return fetch('https://pickupbackend.herokuapp.com/api/v1/confirmations')
    .then(response => response.json())
    .then(json => this.setState({
      allConfirmedGames: json
    }))
    .catch(err => {
      console.log(err)
    })
  }

  removeConfirmedGame = (id) => {
    let confirmedCopy = this.state.allConfirmedGames.slice();
    let newCopy = confirmedCopy.filter(game => game.id !== id)
    this.setState({
      allConfirmedGames: newCopy
    });
  }

  removeCreatedGame = (id) => {
    let confirmedCopy = this.state.allGames.slice();
    let newCopy = confirmedCopy.filter(game => game.id !== id)
    this.setState({
      allGames: newCopy
    })
  }

  sortSports = () => {
    let basketball = this.state.allGames.filter(game => game.sport === "Basketball")
    let golf = this.state.allGames.filter(game => game.sport === "Golf")
    let soccer = this.state.allGames.filter(game => game.sport === "Soccer")
    let baseball = this.state.allGames.filter(game => game.sport === "Baseball")
    this.setState({
      displayBasketballGames: basketball,
      displayGolfGames: golf,
      displaySoccerGames: soccer,
      displayBaseballGames: baseball,
      basketballByCity: basketball,
      golfByCity: golf,
      soccerByCity: soccer,
      baseballByCity: baseball
    })
  }

  filterBasketballCities = (ev) => {
    ev.preventDefault()
    let cityChoice = this.state.basketballByCity.filter(card => card.city === ev.target.cities.value)
    this.setState({
      displayBasketballGames: cityChoice
    })
  }

  filterGolfCities = (ev) => {
    ev.preventDefault()
    let cityChoice = this.state.golfByCity.filter(card => card.city === ev.target.cities.value)
    this.setState({
      displayGolfGames: cityChoice
    })
  }

  filterSoccerCities = (ev) => {
    ev.preventDefault()
    let cityChoice = this.state.soccerByCity.filter(card => card.city === ev.target.cities.value)
    this.setState({
      displaySoccerGames: cityChoice
    })
  }

  filterBaseballCities = (ev) => {
    ev.preventDefault()
    console.log(ev.target.cities.value)
    let cityChoice = this.state.baseballByCity.filter(card => card.city === ev.target.cities.value)
    this.setState({
      displayBaseballGames: cityChoice
    })
  }

  createGame = (ev, game) => {
    ev.preventDefault()
    // console.log('state', state)
    let newGame = {
      sport: ev.target.sport.value,
      city: ev.target.city.value,
      address: ev.target.address.value,
      date: ev.target.date.value,
      price: ev.target.price.value,
      contact: ev.target.contact.value,
      confirmed: ev.target.confirmed.value,
      user_id: this.state.user_id
    }
    this.setState({
      displayMyCreatedGames: [...this.state.displayMyCreatedGames, newGame]
    })


    fetch('https://pickupbackend.herokuapp.com/api/v1/organized_games', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(json => this.setState({
      allGames: [...this.state.allGames, json]
    }))
    .catch(err => {
      console.log(err)
    })
    if (ev.target.sport.value === "Basketball") {
    alert("Game successfully created. To view game, visit the 'Basketball' section")
    this.setState({
      displayBasketballGames: [...this.state.displayBasketballGames, newGame]
    })
  } else if (ev.target.sport.value === "Golf") {
    alert("Game successfully created. To view game, visit the 'Golf' section")
    this.setState({
      displayGolfGames: [...this.state.displayGolfGames, newGame]
    })
  }
    else if (ev.target.sport.value === "Soccer") {
    alert("Game successfully created. To view game, visit the 'Soccer' section")
      this.setState({
        displaySoccerGames: [...this.state.displaySoccerGames, newGame]
      })
    } else if (ev.target.sport.value === "Baseball") {
    alert("Game successfully created. To view game, visit the 'Baseball' section")
      this.setState({
        displayBaseballGames: [...this.state.displayBaseballGames, newGame]
      })
    }
  }

  // buildConfirmGameObject = (game) => {
  //   let cGame;
  //   cGame = {
  //     organized_game_id: game.id,
  //     user_id: this.state.user_id
  //   }
  //   this.confirmGame(cGame)
  // }

  confirmGame = (game) => {
    // debugger
    this.setState({
      displayMyConfirmedGames: [...this.state.displayMyConfirmedGames, game]
    })

    let cGame;
    cGame = {
      organized_game_id: game.id,
      user_id: this.state.user_id
    }

    fetch('https://pickupbackend.herokuapp.com/api/v1/confirmations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(cGame)
    })
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json =>
      this.setState({
          allConfirmedGames: [...this.state.allConfirmedGames, json]

        }))
        .catch(err => {
          console.log(err)
        })
      }

  //   this.setState({
  //     displayMyConfirmedGames: [...this.state.displayMyConfirmedGames, game]
  //   })
  // }


  increasePlayers = (game) => {
    // console.log(game)
    let increase = {
      confirmed: game.confirmed + 1
    }
    alert("You have been confirmed for the event. Please do not confirm more than once.")
    // debugger
    // game object => {id: sprot: confirmed: 3}
    fetch('https://pickupbackend.herokuapp.com/api/v1/organized_games/' + game.id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(increase)
    })
    .then(response => response.json())
    .then(json => this.setState({
      displayBasketballGames: this.state.displayBasketballGames.map(g => {
        if (g.id === game.id) {
          return { ...g, confirmed: g.confirmed + 1 }
        } else {
          return g
        }
      }),
      displayBaseballGames: this.state.displayBaseballGames.map(g => {
        if (g.id === game.id) {
          return { ...g, confirmed: g.confirmed + 1 }
        } else {
          return g
        }
      }),
      displayGolfGames: this.state.displayGolfGames.map(g => {
        if (g.id === game.id) {
          return { ...g, confirmed: g.confirmed + 1 }
        } else {
          return g
        }
      }),
      displaySoccerGames: this.state.displaySoccerGames.map(g => {
        if (g.id === game.id) {
          return { ...g, confirmed: g.confirmed + 1 }
        } else {
          return g
        }
      })
    }))
  }

  // handleUnconfirm = (e) => {
  //   console.log(e)
  //   alert("You have officially bailed on this game. We understand things come up, but if you confirm, please try to make the game!!")
  //   const unconfirm = this.state.allConfirmedGames.filter(card => {
  //     return card.id !== e
  //   })
  //   debugger
  //   this.setState({
  //     allConfirmedGames: unconfirm
  //   })
  // }

  // handleDeleteGame = (e) => {
  //   alert("You have officially bailed on this game and let down the squad :(")
  //   const deleteGame = this.state.displayMyCreatedGames.filter(card => {
  //     return card.id !== e
  //   })
  //   this.setState({
  //     displayMyCreatedGames: deleteGame
  //   })
  // }

  handleMyUpcomingGames = (ev) => {
    console.log("upcoming")
    this.setState({
      showMyUpcomingGames: true,
      showHomePage: false
    })
  }

  handleMyCreatedGames = (game) => {
    console.log('created game', game)
    // fetch('https://pickupbackend.herokuapp.com/api/v1/organized_games/')
    this.setState({
      showMyCreatedGames: true,
      showHomePage: false
    })
  }

  organizeGame = (ev) => {
    this.setState({
      showCreateForm: true
    })
  }

  showBasketballCards = (ev) => {
    this.setState({
      showBasketballGames: true
    })
  }

  showGolfCards = (ev) => {
    this.setState({
      showGolfGames: true
    })
  }

  showSoccerCards = (ev) => {
    this.setState({
      showSoccerGames: true
    })
  }

  showBaseballCards = (ev) => {
    this.setState({
      showBaseballGames: true
    })
  }


  render() {
    let currentDisplay;
    if (this.state.showCreateForm !== false) {
      currentDisplay = <OrganizeGames homePageClick={this.homePageClick} createGame={this.createGame}/>
    }
    else if (this.state.showBasketballGames !== false) {
      currentDisplay = <BasketballGames homePageClick={this.homePageClick} displayBasketballGames={this.state.displayBasketballGames}
                                        increasePlayers={this.increasePlayers} filterBasketballCities={this.filterBasketballCities}
                                        confirmed={this.state.confirmed} confirmGame={this.confirmGame}
                                        buildConfirmGameObject={this.buildConfirmGameObject}/>
    }
    else if (this.state.showGolfGames !== false) {
      currentDisplay = <GolfGames homePageClick={this.homePageClick} displayGolfGames={this.state.displayGolfGames}
                                  increasePlayers={this.increasePlayers} filterGolfCities={this.filterGolfCities}
                                  confirmGame={this.confirmGame} buildConfirmGameObject={this.buildConfirmGameObject}/>
    }
    else if (this.state.showSoccerGames !== false) {
      currentDisplay = <SoccerGames homePageClick={this.homePageClick} displaySoccerGames={this.state.displaySoccerGames}
                                    increasePlayers={this.increasePlayers} filterSoccerCities={this.filterSoccerCities}
                                    confirmGame={this.confirmGame} buildConfirmGameObject={this.buildConfirmGameObject}/>
    }
    else if (this.state.showBaseballGames !== false) {
      currentDisplay = <BaseballGames homePageClick={this.homePageClick} displayBaseballGames={this.state.displayBaseballGames}
                                      increasePlayers={this.increasePlayers} filterBaseballCities={this.filterBaseballCities}
                                      confirmGame={this.confirmGame} buildConfirmGameObject={this.buildConfirmGameObject}/>
    }
    else if (this.state.showHomePage !== false) {
      currentDisplay = <HomePage organizeGame={this.organizeGame} handleMyCreatedGames={this.handleMyCreatedGames}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}
                                 handleMyUpcomingGames={this.handleMyUpcomingGames} logMeOut={this.logMeOut}
                                 name={this.state.name}
                                 />
    }
    else if (this.state.showMyCreatedGames !== false) {
      currentDisplay = <MyCreatedGames user_id={this.state.user_id} allGames={this.state.allGames} homePageClick={this.homePageClick} displayMyCreatedGames={this.state.displayMyCreatedGames}
                        handleDeleteGame={this.handleDeleteGame} removeCreatedGame={this.removeCreatedGame}/>
    }
    else if (this.state.showMyUpcomingGames !== false) {
      currentDisplay = <MyUpcomingGames user_id={this.state.user_id} homePageClick={this.homePageClick} displayMyConfirmedGames={this.state.displayMyConfirmedGames}
                        handleUnconfirm={this.handleUnconfirm} allConfirmedGames={this.state.allConfirmedGames} removeConfirmedGame={this.removeConfirmedGame}/>
    }
    else if (this.state.loggedIn === false) {
      currentDisplay = <UserLogin logMeIn={this.logMeIn}/>
    }
    else {
      currentDisplay = <HomePage organizeGame={this.organizeGame} handleMyCreatedGames={this.handleMyCreatedGames}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}
                                 handleMyUpcomingGames={this.handleMyUpcomingGames} logMeOut={this.logMeOut}
                                 name={this.state.name}/>
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

//HELPER FUNCTION


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
