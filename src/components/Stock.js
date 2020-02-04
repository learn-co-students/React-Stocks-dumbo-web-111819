import React from 'react'

const Stock = (props) => {
  // console.log(props.stock)
  let {price,ticker,name,type} = props.stock

  let handleClick = () => { 
    // console.log(name,price)
    props.addStock(name,price) 
  }
  return(
    
  <div>
    
    <div className="card" onClick={handleClick}>
      <div className="card-body" >
        <h5 className="card-title">{
            name 
          }</h5>
        <p className="card-text">{
            price
          }</p>
      </div>
    </div>


  </div>
  
    )  };

export default Stock
