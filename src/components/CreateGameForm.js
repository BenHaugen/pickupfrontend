import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class CreateGameForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: new Date()
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  //
  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }
  render() {
    return (
    <div className="ui segment" id="gameform">
    <h4>Create a Game</h4>
    <form className="ui form" onSubmit={(ev) => this.props.createGame(ev, this.state)}>
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
        <label>Location</label>
        <input type="text" name="address" required placeholder="Enter Location of Game"></input>
      </div>
      <div className="field">
        <label>Date/Time</label>
        <label>(Ex: Sat, May 18 2:30PM)</label>
        <input type="text" name="date" required placeholder="Enter Both Date and Time"></input>
      </div>
      <div className="field">
        <label>Price</label>
        <input type="text" name="price" required placeholder="Enter 'Free' or Cost to Play"></input>
      </div>
      <div className="field">
        <label>Contact Number/Email</label>
        <input type="text" name="contact" required placeholder="Enter Phone Number or Email"></input>
      </div>
      <div className="field">
        <label>Confirmed Number of Players</label>
        <input type="number" name="confirmed" required placeholder="Enter at Least '1'"></input>
      </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  )
  }
}

export default CreateGameForm

// <div className="field">
//   <label>Date/Time</label>
//   <label>(Ex: Sat, May 18 2:30PM)</label>
//   <input type="text" name="date" required placeholder="Enter Both Date and Time"></input>
// </div>


// <DatePicker
// selected={this.state.startDate}
// onChange={this.handleChange}
// showTimeSelect
// timeFormat="HH:mm"
// timeIntervals={15}
// dateFormat="MMMM d, yyyy h:mm aa"
// timeCaption="time"
// />
// </div>


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
