import React from 'react'
import CreateGameForm from '../components/CreateGameForm'

class OrganizeGames extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.homePageClick} type="submit">Home</button>
        </div>
        <div>
          <CreateGameForm createBasketballGame={this.props.createBasketballGame}/>
        </div>
      </div>
    )
  }

}

export default OrganizeGames
