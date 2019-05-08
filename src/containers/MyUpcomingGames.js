import React, { Component } from 'react';
import MyUpcomingGameCards from '../components/MyUpcomingGameCards'
import {Card} from 'semantic-ui-react'

class MyUpcomingGames extends Component {
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/confirmed_games')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }
  // .then(json => this.setState({
  //   displayMyConfirmedGames: json
  // }))
  state = {
  }


  handleUnconfirm = (e) => {
    console.log(e)
    alert("You have officially bailed on this game. We understand things come up, but if you confirm, please try to make the game!!")
    const holdVar = this.state.displayMyConfirmedGames.slice()
    const unconfirm = holdVar.filter(card => {
      return card.id !== e
    })
    fetch('https://pickupbackend.herokuapp.com/api/v1/confirmations/' + e, {
      method: 'DELETE'
    })
    this.setState({
      displayMyConfirmedGames: unconfirm
    })
    this.props.removeConfirmedGame(e)
  }

  componentDidMount(){
    let userGames;
    userGames = this.props.allConfirmedGames.filter(game => game.user.id === this.props.user_id)
    this.setState({
      displayMyConfirmedGames: userGames
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
        <header className="gamesHeader">Your Upcoming Games</header>
      </div>
      <br/>
    <div className="ui segment" id="myCreatedGamesBackground">
      <Card.Group>
      {this.state.displayMyConfirmedGames ?
      this.state.displayMyConfirmedGames.map((game, id) => {
      return <MyUpcomingGameCards game={game} key={id} handleUnconfirm={this.handleUnconfirm}/>
      })
      : null}
      </Card.Group>
    </div>
    </div>
    );
  }

}

export default MyUpcomingGames;






//   render() {
//     return (
//       <div>
//         <div>
//           <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
//         </div>
//         <br></br>
//         <div>
//         <header className="gamesHeader">Your Upcoming Games</header>
//         </div>
//         <div className="ui segment" id="myUpcomingGamesBackground">
//           <div className="ui container">
//             <div className="ui two row grid">
//               <div className="row">
//                 <div className="ui container">
//                   <div className="ui three column grid">
//                   {this.props.displayMyConfirmedGames.map((game, id) => {
//                       return <MyUpcomingGameCards game={game} key={id} handleUnconfirm={this.props.handleUnconfirm}/>
//                     })}
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
// export default MyUpcomingGames;
