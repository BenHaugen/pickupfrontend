import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const GameCard = props => {
  return (

  <Card
    description=<div className="meta text-wrap">
      Sport: {props.game.sport}<br/>
      City: {props.game.city}<br/>
      Address: {props.game.address}<br/>
      Date/Time: {props.game.date}<br/>
      Price: {props.game.price}<br/>
      Contact of Organizer: {props.game.contact}<br/>
      Confirmed Players: {props.game.confirmed}<hr/>
    <Button onClick={() => {props.increasePlayers(props.game); props.confirmGame(props.game)}} type="submit">Confirm Play</Button>
      </div>
    centered
    />
  )
}



export default GameCard

// {() => {props.increasePlayers(props.game); props.confirmGame(props.game)}}

// <Button onClick={() => {props.increasePlayers(props.game); props.confirmGame(props.game); props.buildConfirmGameObject(props.game)}} type="submit">Confirm Play</Button>
