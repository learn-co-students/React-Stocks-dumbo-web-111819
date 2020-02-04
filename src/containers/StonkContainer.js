import React, { Component } from 'react';
import Stonk from '../components/Stonk'

class StonkContainer extends Component {

  renderStonks = () => {
    console.log(this.props.stonks)
    return this.props.stonks.map(stonk => 
      <Stonk 
        key={'s' + stonk.id} 
        stonk={stonk} 
        addRemove={this.props.addToPortfolio} 
      />)
  }

  render() {
    return (
      <div>
        <h2>Stonks</h2>
        {
          this.renderStonks()
        }
      </div>
    );
  }

}

export default StonkContainer;

