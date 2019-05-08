import React, { Component } from 'react';
import CityDropdown from '../components/CityDropdown'
import GameCard from '../components/GameCard'
import {Card} from 'semantic-ui-react'
class GolfGames extends Component {

  state={
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
      <CityDropdown filterCities={this.props.filterGolfCities}/>
      </div>
       <div className="ui segment" id="golfCardBackground">
      <Card.Group centered itemsPerRow={this.state.itemPerRow}>
        {this.props.displayGolfGames.map((game, id) => {
                          return <GameCard confirmed={this.props.confirmed} game={game} key={id} increasePlayers={this.props.increasePlayers} confirmGame={this.props.confirmGame} buildConfirmGameObject={this.props.buildConfirmGameObject}/>
                        })}
      </Card.Group>
    </div>
    </div>
    );
  }

}

export default GolfGames;

// class GolfGames extends Component {
//
//   render() {
//     return (
//       <div>
//         <div>
//           <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
//         </div>
//         <div>
//           <CityDropdown filterCities={this.props.filterGolfCities}/>
//         </div>
//         <div className="ui segment" id="golfCardBackground">
//           <div className="ui container">
//             <div className="ui two row grid">
//               <div className="row">
//                 <div className="ui container">
//                   <div className="ui three column grid">
//                     {this.props.displayGolfGames.map((game, id) => {
//                         return <GameCard game={game} key={id} increasePlayers={this.props.increasePlayers}/>
//                       })}
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
// export default GolfGames;
