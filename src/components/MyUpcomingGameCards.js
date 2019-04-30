import React from 'react'

const MyUpcomingGameCards = props => {
  return (

    <div>
    <div class="card">
    <div class="content">
      Sport: <p>{props.game.sport}</p>
      City: <p>{props.game.city}</p>
      Location: <p>{props.game.address}</p>
      Date: <p>{props.game.date}</p>
      Price: <p>{props.game.price}</p>
      Conctact: <p>{props.game.contact}</p>  
      <button>Delete Game</button>
      </div>
    </div>
    </div>

  )

}

export default MyUpcomingGameCards
