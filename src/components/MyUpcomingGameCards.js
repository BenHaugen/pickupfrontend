import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const MyUpcomingGameCards = props => {

  return (
    <Card
      description=<div className="meta text-wrap">
        Sport: {props.game.organized_game.sport}<br/>
        City: {props.game.organized_game.city}<br/>
        Address: {props.game.organized_game.address}<br/>
        Date/Time: {props.game.organized_game.date}<br/>
        Price: {props.game.organized_game.price}<br/>
        Contact of Organizer: {props.game.organized_game.contact}<hr/>
      <Button onClick={(e) => props.handleUnconfirm(props.game.id)}>Bail On the Squad</Button>
        </div>
      centered
      />
  )
}

export default MyUpcomingGameCards

// <div>
// <div className="card">
// <div className="content">
//   Sport: <p>{props.game.sport}</p>
//   City: <p>{props.game.city}</p>
//   Location: <p>{props.game.address}</p>
//   Date: <p>{props.game.date}</p>
//   Price: <p>{props.game.price}</p>
//   Conctact: <p>{props.game.contact}</p>
// <button onClick={(e) => props.handleUnconfirm(props.game.id)}>Bail On the Squad</button>
//   </div>
// </div>
// </div>
