import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => 
      <Stock key={'p' + stock.id} stock={stock} />
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default PortfolioContainer;

