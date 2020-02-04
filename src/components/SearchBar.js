import React from 'react';

const SearchBar = (props) => {
  console.log(props.alphaSort)

  const handleAlphaChange = () => {
    props.toggleAlphaSort()
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphaSort} onChange={handleAlphaChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={null}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
