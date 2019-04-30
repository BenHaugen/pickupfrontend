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
    displayMyUpcomingGames: [],
    showCreateForm: false,
    showBasketballGames: false,
    showGolfGames: false,
    showSoccerGames: false,
    showBaseballGames: false,
    showHomePage: false,
    myCreatedGames: false,
    showMyCreatedGames: false,
    showMyUpcomingGames: false,
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

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/games')
    .then(response => response.json())
    .then(json => this.setState({allGames: json}, () => this.sortSports()))
  }

  // .then(json => this.setState({
  //   displayBasketballGames: json
  // }))

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

  createGame = (ev) => {
    ev.preventDefault()
    let newGame = {
      sport: ev.target.sport.value,
      city: ev.target.city.value,
      address: ev.target.address.value,
      date: ev.target.date.value,
      price: ev.target.price.value,
      contact: ev.target.contact.value,
      confirmed: ev.target.confirmed.value
    }

    this.setState({
      displayMyCreatedGames: [...this.state.displayMyCreatedGames, newGame]
    })


    fetch('http://localhost:3000/api/v1/games', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(json => this.setState({
      allGames: [...this.state.allGames, json]
    }))
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

  increasePlayers = (game) => {
    let increase = {
      confirmed: game.confirmed + 1
    }
    alert("You have been confirmed for the event. Please do not confirm more than once.")
    debugger
    // game object => {id: sprot: confirmed: 3}
    fetch('http://localhost:3000/api/v1/games/' + game.id, {
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
      })
    }))
  }

  handleMyUpcomingGames = (ev) => {
    console.log("upcoming")
    this.setState({
      showMyUpcomingGames: true,
      showHomePage: false
    })
  }

  handleMyCreatedGames = (ev) => {
    console.log('myCreatedGames')
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
                                        confirmed={this.state.confirmed}/>
    }
    else if (this.state.showGolfGames !== false) {
      currentDisplay = <GolfGames homePageClick={this.homePageClick} displayGolfGames={this.state.displayGolfGames}
                                  increasePlayers={this.increasePlayers} filterGolfCities={this.filterGolfCities}/>
    }
    else if (this.state.showSoccerGames !== false) {
      currentDisplay = <SoccerGames homePageClick={this.homePageClick} displaySoccerGames={this.state.displaySoccerGames}
                                    increasePlayers={this.increasePlayers} filterSoccerCities={this.filterSoccerCities}/>
    }
    else if (this.state.showBaseballGames !== false) {
      currentDisplay = <BaseballGames homePageClick={this.homePageClick} displayBaseballGames={this.state.displayBaseballGames}
                                      increasePlayers={this.increasePlayers} filterBaseballCities={this.filterBaseballCities}/>
    }
    else if (this.state.showHomePage !== false) {
      currentDisplay = <HomePage organizeGame={this.organizeGame} handleMyCreatedGames={this.handleMyCreatedGames}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}
                                 handleMyUpcomingGames={this.handleMyUpcomingGames}/>
    }
    else if (this.state.showMyCreatedGames !== false) {
      currentDisplay = <MyCreatedGames homePageClick={this.homePageClick} displayMyCreatedGames={this.state.displayMyCreatedGames}/>
    }
    else if (this.state.showMyUpcomingGames !== false) {
      currentDisplay = <MyUpcomingGames homePageClick={this.homePageClick} displayMyUpcomingGames={this.state.displayMyUpcomingGames}/>
    }
    else {
      currentDisplay = <HomePage organizeGame={this.organizeGame} handleMyCreatedGames={this.handleMyCreatedGames}
                                 showBasketballCards={this.showBasketballCards} showGolfCards={this.showGolfCards}
                                 showSoccerCards={this.showSoccerCards} showBaseballCards={this.showBaseballCards}
                                 handleMyUpcomingGames={this.handleMyUpcomingGames}/>
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
