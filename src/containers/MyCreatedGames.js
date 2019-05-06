import React, { Component } from 'react';
import MyCreatedGameCards from '../components/MyCreatedGameCards'

class MyCreatedGames extends Component {
  state = {
  }

  componentDidMount(){
    let userGames;
    userGames = this.props.allGames.filter(game => game.user_id === this.props.user_id)
    this.setState({
      displayMyCreatedGames: userGames
    })
  }
  render() {
    return (
      <div>
        <div>
          <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <br></br>
        <div>
        <header className="gamesHeader">Games You're Runnin'</header>
        </div>
        <div className="ui segment" id="myCreatedGamesBackground">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    {this.state.displayMyCreatedGames ?
                      this.state.displayMyCreatedGames.map((game, id) => {
                        return <MyCreatedGameCards game={game} key={id} handleDeleteGame={this.props.handleDeleteGame}/>
                      })
                    : null}
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

export default MyCreatedGames;
