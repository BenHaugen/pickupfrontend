import React from 'react'

const CityDropdown = props => {


  return (
  <div>
    <div>
      <h2 className='ui header'>
        Search by City
      </h2>
    </div>
    <form onSubmit={(ev)=> props.chooseGameByCity(ev)}>
      <select name="cities">
        <option value="Seattle">Seattle</option>
        <option value="Tacoma">Tacoma</option>
        <option value="Bellingham">Bellingham</option>
        <option value="Spokane">Spokane</option>
      </select>

        <input type="submit"></input>
    </form>
  </div>
    )
  }

export default CityDropdown
