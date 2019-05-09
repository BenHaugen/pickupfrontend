import React from 'react'

const CityDropdown = props => {


  return (
  <div>
    <div>
      <h2 className='cityHeader'>
        Search by City
      </h2>
    </div>
    <form onSubmit={(ev)=> props.filterCities(ev)}>
      <select id="cityDropdown" name="cities">
        <option value="Seattle">Seattle</option>
        <option value="Tacoma">Tacoma</option>
        <option value="Bellingham">Bellingham</option>
        <option value="Spokane">Spokane</option>
      </select>
{" "}
        <input id="dropDownSubmit" type="submit" style={{color: "black", backgroundColor: "silver"}}></input>
    </form>
  </div>
    )
  }

export default CityDropdown
