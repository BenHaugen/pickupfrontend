import React, { Component } from 'react';
import MyCreatedGameCards from '../components/MyCreatedGameCards'
import {Card} from 'semantic-ui-react'

class MyCreatedGames extends Component {
  state = {
  }

  handleDeleteGame = (e) => {
    console.log(e)
    alert("You have officially bailed on this game and let down the squad :(")
    const deleteGame = this.state.displayMyCreatedGames.filter(card => {
      return card.id !== e
    })
    this.setState({
      displayMyCreatedGames: deleteGame
    })
    fetch('https://pickupbackend.herokuapp.com/api/v1/organized_games/' + e, {
      method: 'DELETE'
    })
    this.props.removeCreatedGame(e)
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
        <br/>
        <div>
          <header className="gamesHeader">Games You're Runnin'</header>
        </div>
        <br/>
         <div className="ui segment" id="myCreatedGamesBackground">
        <Card.Group>
        {this.state.displayMyCreatedGames ?
        this.state.displayMyCreatedGames.map((game, id) => {
        return <MyCreatedGameCards game={game} key={id} handleDeleteGame={this.handleDeleteGame}/>
        })
        : null}
        </Card.Group>
      </div>
      </div>
      );
    }

  }

  export default MyCreatedGames;

//   render() {
//     return (
//       <div>
//         <div>
//           <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
//         </div>
//         <br></br>
//         <div>
//         <header className="gamesHeader">Games You're Runnin'</header>
//         </div>
//         <div className="ui segment" id="myCreatedGamesBackground">
//           <div className="ui container">
//             <div className="ui two row grid">
//               <div className="row">
//                 <div className="ui container">
//                   <div className="ui three column grid">
//                     {this.state.displayMyCreatedGames ?
//                       this.state.displayMyCreatedGames.map((game, id) => {
//                         return <MyCreatedGameCards game={game} key={id} handleDeleteGame={this.props.handleDeleteGame}/>
//                       })
//                     : null}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//
// }
//
// export default MyCreatedGames;
