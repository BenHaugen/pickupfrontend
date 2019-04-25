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
          <option value="basketball">Basketball</option>
          <option value="golf">Golf</option>
          <option value="soccer">Soccer</option>
          <option value="baseball">Baseball</option>
        </select>
      </div>
      <div className="field">
        <label>City</label>
        <select className="ui fluid dropdown" name="city">
          <option value="seattle">Seattle</option>
          <option value="tacoma">Tacoma</option>
          <option value="bellingham">Bellingham</option>
          <option value="spokane">Spokane</option>
        </select>
      </div>
      <div className="field">
        <label>Address</label>
        <input type="text" name="address" placeholder="Enter Game Address"></input>
      </div>
      <div className="field">
        <label>Date/Time</label>
        <input type="text" name="date" placeholder="Enter Both Date and Time"></input>
      </div>
      <div className="field">
        <label>Price</label>
        <input type="text" name="price" placeholder="Enter 'Free' or Cost to Play"></input>
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
