import React from "react";

class CreateGameForm extends React.Component {
  render() {
    return (
    <div className="ui segment" id="gameform">
    <h4>Create a Game</h4>
    <form className="ui form" onSubmit={(ev) => this.props.createBasketballGame(ev)}>
      <div className="field">
        <label>Sport</label>
        <select className="ui fluid dropdown" name="sport">
          <option value="Basketball">Basketball</option>
          <option value="Golf">Golf</option>
          <option value="Soccer">Soccer</option>
          <option value="Baseball">Baseball</option>
        </select>
      </div>
      <div className="field">
        <label>City</label>
        <select className="ui fluid dropdown" name="city">
          <option value="Seattle">Seattle</option>
          <option value="Tacoma">Tacoma</option>
          <option value="Bellingham">Bellingham</option>
          <option value="Spokane">Spokane</option>
        </select>
      </div>
      <div className="field">
        <label>Address</label>
        <input type="text" name="address" placeholder="Enter Game Address"></input>
      </div>
      <div className="field">
        <label>Date/Time</label>
        <label>(Ex: Sat, May 18 2:30PM)</label>
        <input type="text" name="date" placeholder="Enter Both Date and Time"></input>
      </div>
      <div className="field">
        <label>Price</label>
        <input type="text" name="price" placeholder="Enter 'Free' or Cost to Play"></input>
      </div>
      <div className="field">
        <label>Contact Number/Email</label>
        <input type="text" name="contact" placeholder="Enter Phone Number or Email"></input>
      </div>
      <div className="field">
        <label>Confirmed Number of Players</label>
        <input type="text" name="confirmedPlayers" placeholder="Enter at Least '1'"></input>
      </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  )
  }
}

export default CreateGameForm
// <form className="ui form">
//   City: <select name="cities">
//     <option value="Seattle">Seattle</option>
//     <option value="Tacoma">Tacoma</option>
//     <option value="Bellingham">Bellingham</option>
//     <option value="Spokane">Spokane</option>
//   </select>
//   Address:<input type="text" name="address" placeholder="Enter Address"></input>
//   Date:<input type="text" name="date" placeholder="Enter Date"></input>
//   Price:<input type="text" name="address" placeholder="Enter 'Free' or Price"></input>
//   <input type="submit" value="Submit"></input>
// </form>
