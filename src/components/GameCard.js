import React from 'react'

const GameCard = props => {
  return (
    <div className="ui column">
      <div className="card-in-all-cards">
      <div className="ui card">
        <div className="content" id="content">
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
            Confirmed Players: {props.game.confirmed}
          </div>
          <div className="meta text-wrap">
          <button onClick={() => props.increasePlayers(props.game)} type="submit">Confirm Play</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )

}

export default GameCard

// <div class="card">
//   <img src="" alt="" />
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div>





// <div>
// <div class="card">
// <div class="bg-img"></div>
// <div class="content">
//   <h4>Card title</h4>
//   <p>Content....</p> <button>Readmore</button> </div>
// </div>
// <div class="card">
// <div class="bg-img"></div>
// <div class="content">
//   <h4>Card title</h4>
//   <p>Content....</p> <button>Readmore</button> </div>
// </div>
// <div class="card">
// <div class="bg-img"></div>
// <div class="content">
//   <h4>Card title</h4>
//   <p>Content....</p> <button>Readmore</button> </div>
// </div>
// </div>
