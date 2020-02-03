import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let portfolioArr = this.props.portfolio.map(stock => <Stock key={stock.id} stock={stock} sellStock={this.props.sellStock}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioArr
          }
      </div>
    );
  }

}

export default PortfolioContainer;
