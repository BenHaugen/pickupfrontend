import React, { Component } from 'react';
import MyUpcomingGameCards from '../components/MyUpcomingGameCards'

class MyUpcomingGames extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/confirmed_games')
    .then(response => response.json())
    .then(json => console.log(json))
  }
  // .then(json => this.setState({
  //   displayMyUpcomingGames: json
  // }))
  // state = {
  // }
  //
  // componentDidMount(){
  //   let userGames;
  //   userGames = this.props.allGames.filter(game => game.user_id === this.props.user_id)
  //   this.setState({
  //     displayMyUpcomingGames: userGames
  //   })
  // }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <br></br>
        <div>
        <header className="ui header">Your Upcoming Games</header>
        </div>
        <div className="ui segment" id="myUpcomingGamesBackground">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                  {this.props.displayMyUpcomingGames.map((game, id) => {
                      return <MyUpcomingGameCards game={game} key={id} handleUnconfirm={this.props.handleUnconfirm}/>
                    })}
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

export default MyUpcomingGames;
