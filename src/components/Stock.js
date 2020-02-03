import React from 'react'


const Stock = (props) => {
  
  const handleClick = () => {
    props.addToPortfolio(props.stock)
  }
  
  return(
    <div onClick={handleClick}>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              // console.log(props.stock.name),
              props.stock.name
            }</h5>
          <p className="card-text">{
              // console.log(props.stock.price),
              props.stock.price
            }</p>
        </div>
      </div>

    </div>
  )
};

export default Stock

