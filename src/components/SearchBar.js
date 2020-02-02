import React from 'react';

const SearchBar = (props) => {

  const onChangeFilter = (e) => {
    props.filterStocks(e.target.value)
  }

  const onChange = (e) => {
    props.sort(e)
  }
  
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name = 'sort' value="alphabetize" onChange={onChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name = 'sort' value="priceSort" onChange={onChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onChangeFilter}>
          <option value = ''> none </option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
