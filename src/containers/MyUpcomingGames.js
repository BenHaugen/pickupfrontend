import React, { Component } from 'react';
// import MyCreatedGameCards from '../components/MyCreatedGameCards'

class MyUpcomingGames extends Component {

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
