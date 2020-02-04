import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  render() {
    let stockMapper = this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} addStock={this.props.addStock}/>)
    // this.props.stocks

    return (
      <div>
        <h2>Stocks</h2>
        {stockMapper}
      </div>
    );
  }

}

export default StockContainer;
