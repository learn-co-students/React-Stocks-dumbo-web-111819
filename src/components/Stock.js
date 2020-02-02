import React from 'react'

const Stock = (props) => {
  
  const onClick =()=>{
    if(props.onClickBuyStock){
      props.onClickBuyStock(props.stock.id)
    }else if (props.onClickSellStock){
      props.onClickSellStock(props.stock.id)
    }
  }
  
  return(<div>

    <div className="card" onClick = {onClick}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>)
};

export default Stock
