import React, { Component } from 'react';
import CityDropdown from '../components/CityDropdown'
import GameCard from '../components/GameCard'
import {Card} from 'semantic-ui-react'
class SoccerGames extends Component {

  state = {
    itemPerRow: 1
  }

  componentDidMount(){
    if (window.innerWidth < 800) {
      this.setState({
        itemPerRow: 1
      })
    } else {
      this.setState({
        itemPerRow: 3
      })
    }
  }

  render() {
    return (
      <div>
      <div>
      <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
      </div>
      <div>
      <CityDropdown filterCities={this.props.filterSoccerCities}/>
      </div>
       <div className="ui segment" id="soccerCardBackground">
      <Card.Group centered itemsPerRow={this.state.itemPerRow}>
        {this.props.displaySoccerGames.map((game, id) => {
                          return <GameCard confirmed={this.props.confirmed} game={game} key={id} increasePlayers={this.props.increasePlayers} confirmGame={this.props.confirmGame} buildConfirmGameObject={this.props.buildConfirmGameObject}/>
                        })}
      </Card.Group>
    </div>
    </div>
    );
  }

}

export default SoccerGames;

// class SoccerGames extends Component {
//
//   render() {
//     return (
//       <div>
//         <div>
//           <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
//         </div>
//         <div>
//           <CityDropdown filterCities={this.props.filterSoccerCities}/>
//         </div>
//         <div className="ui segment" id="soccerCardBackground">
//           <div className="ui container">
//             <div className="ui two row grid">
//               <div className="row">
//                 <div className="ui container">
//                   <div className="ui three column grid">
//                     {this.props.displaySoccerGames.map((game, id) => {
//                         return <GameCard game={game} key={id} increasePlayers={this.props.increasePlayers}/>
//                       })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default SoccerGames;
