import React from 'react'
import CreateGameForm from '../components/CreateGameForm'

class OrganizeGames extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button className="homeButton" onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <div>
          <CreateGameForm createGame={this.props.createGame}/>
        </div>
      </div>
    )
  }

}

export default OrganizeGames
