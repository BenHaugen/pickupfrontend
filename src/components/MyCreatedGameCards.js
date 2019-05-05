import React from 'react'

const MyCreatedGameCards = props => {
  return (

    <div className="ui column">
      <div className="card-in-all-cards">
      <div className="ui card" id="myCreatedGamesCard">
          <div className="header">
          </div>
          <div className="meta text-wrap">
            Sport: {props.game.sport}
          </div>
          <div className="meta text-wrap">
            City: {props.game.city}
          </div>
          <div className="meta text-wrap">
            Address: {props.game.address}
          </div>
          <div className="meta text-wrap">
            Date/Time: {props.game.date}
          </div>
          <div className="meta text-wrap">
            Price: {props.game.price}
          </div>
          <div className="meta text-wrap">
            Contact of Organizer: {props.game.contact}
          </div>
          <div className="meta text-wrap">
          <button onClick={(e) => props.handleDeleteGame(props.game.id)}>Delete Game</button>
          </div>

      </div>
    </div>
    </div>


  )

}

export default MyCreatedGameCards

// <div>
// <div className="card">
// <div className="content">
//   Sport: <p>{props.game.sport}</p>
//   City: <p>{props.game.city}</p>
//   Location: <p>{props.game.address}</p>
//   Date: <p>{props.game.date}</p>
//   Price: <p>{props.game.price}</p>
//   Conctact: <p>{props.game.contact}</p>
//   <button>Delete Game</button>
//   </div>
// </div>
// </div>
