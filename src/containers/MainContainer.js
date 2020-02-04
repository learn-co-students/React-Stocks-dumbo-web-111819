import React, { Component } from 'react';
import StonkContainer from './StonkContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>

        <SearchBar 
          alphaSort={this.props.alphaSort} 
          toggleAlphaSort={this.props.toggleAlphaSort} 
          priceSort={this.props.priceSort}
          togglePriceSort={this.props.togglePriceSort}
          // filterStonks={this.props.filterStonks}
          setFilterBy={this.props.setFilterBy}
        />

          <div className="row">
            <div className="col-8">

              <StonkContainer 
                stonks={this.props.stonks} 
                addToPortfolio={this.props.addToPortfolio} 
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                stonks={this.props.myPortfolio} 
                removeFromPortfolio={this.props.removeFromPortfolio} 
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

