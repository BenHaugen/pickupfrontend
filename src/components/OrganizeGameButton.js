import React from 'react'

const OrganizeGameButton = props => {


  return (
    <div>
      <h2 className="ui header">
      Want to Organize a Game?
      </h2>
    <div>
      <button onClick={(ev) => props.organizeGame(ev)} className="ui button" type="submit">Organize</button>
    </div>
    </div>
    )
  }

export default OrganizeGameButton
