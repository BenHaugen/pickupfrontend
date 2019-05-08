import React from 'react'

const OrganizeGameButton = props => {


  return (
    <div>
      <h2 className="organizeHeader">
      Want to Organize a Game?
      </h2>
    <div>
      <button id="organizeButton" onClick={(ev) => props.organizeGame(ev)} className="ui button" type="submit">Organize</button>
    </div>
    <br></br>
    <div>
      <img src= "https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/130828123801-michael-jordan-iso-1998-all-star-game.video-player.jpg?itok=6H7vzj5I" id="pic"/>
      </div>
    </div>
    )
  }

export default OrganizeGameButton

// <iframe src="https://giphy.com/embed/qAREK41X3nzl6" title='funnygif' width="480" height="320" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/comedy-golf-adam-sandler-qAREK41X3nzl6">via GIPHY</a></p>
