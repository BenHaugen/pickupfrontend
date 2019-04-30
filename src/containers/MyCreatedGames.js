import React from 'react'

class MyCreatedGames extends React.Component {
  render() {
    return (
      <div>
      <div>
      <button onClick={this.props.homePageClick} type="submit">Home</button>
      </div>
      {this.props.myCreatedGames}
      Hey there
      </div>
    )
  }
}

export default MyCreatedGames
