import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    
    let stockArr = this.props.stocks.map(stock=> <Stock key={stock.id} stock={stock} buyStock={this.props.buyStock}/>)
      return (
        <div>
          <h2>Stocks</h2>
          {stockArr}
        </div>
      );
  }

}

export default StockContainer;
