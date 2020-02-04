import React from 'react';

const SearchBar = (props) => {
  // console.log(props.alphaSort)

  const handleAlphaClick = () => {
    props.toggleAlphaSort()
  }

  const handleAlphaChange = () => {null}

  const handlePriceClick = () => {
    props.togglePriceSort()
  }

  const handlePriceChange = () => {null}

  const handleFilter = (e) => {
    props.setFilterBy(e.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.alphaSort} 
          onClick={handleAlphaClick} 
          onChange={handleAlphaChange} 
        />
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={props.priceSort} 
          onClick={handlePriceClick} 
          onChange={handlePriceChange}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
