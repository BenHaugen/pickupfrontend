import React from 'react'

const OrganizeGameButton = props => {


  return (
    <div>
      <h2 className="ui header">
      Want to Organize a Game?
      </h2>
    <div>
      <button id="organizeButton" onClick={(ev) => props.organizeGame(ev)} className="ui button" type="submit">Organize</button>
    </div>
    <br></br>
    <div>
      </div>
    </div>
    )
  }

export default OrganizeGameButton

// <iframe src="https://giphy.com/embed/qAREK41X3nzl6" title='funnygif' width="480" height="320" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/comedy-golf-adam-sandler-qAREK41X3nzl6">via GIPHY</a></p>
