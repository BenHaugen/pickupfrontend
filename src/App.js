import React from 'react';
import './App.css';
import HomePage from './containers/HomePage'
// import Facebook from './components/Facebook'

class App extends React.Component {

  state = {
    displayBasketballGame: []
  }

  createBasketballGame = (ev) => {
    ev.preventDefault()
    console.log(ev.target.sport.value)
    // let newGame = {
    //   sport: ev.target.sport.value,
    //   city: ev.target.city.value,
    //   address: ev.target.address.value,
    //   date: ev.target.date.value,
    //   price: ev.target.price.value
    // }
  }

  chooseGameByCity = (ev) => {
    ev.preventDefault()
    console.log(ev.target.cities.value)
  }
render() {
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">PickUp</h1>
        </header>

        <HomePage chooseGameByCity={this.chooseGameByCity} createBasketballGame={this.createBasketballGame}/>

    </div>
  );
}
}

export default App;

// <p className="App-intro">To get started, authenticate with Facebook</p>
// <Facebook />
