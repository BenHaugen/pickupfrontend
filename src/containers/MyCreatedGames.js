import React, { Component } from 'react';
import MyCreatedGameCards from '../components/MyCreatedGameCards'

class MyCreatedGames extends Component {

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <br></br>
        <div>
        <header className="ui header">Games You're Runnin'</header>
        </div>
        <div className="ui segment" id="myCreatedGamesBackground">
          <div className="ui container">
            <div className="ui two row grid">
              <div className="row">
                <div className="ui container">
                  <div className="ui three column grid">
                    {this.props.displayMyCreatedGames.map((game, id) => {
                        return <MyCreatedGameCards game={game} key={id}/>
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

export default MyCreatedGames;
