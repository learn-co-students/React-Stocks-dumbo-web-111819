import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock';

class MainContainer extends Component {

  state = { 
    stocks: [],
    portfolio: [],
  }
    componentDidMount() { 
      fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(stocks => {
       this.setState({ 
         stocks: stocks
       })
      })
    }
   addToPortfolio = (info) => { 
      this.setState({
        portfolio: [...this.state.portfolio, info]
      })
        // console.log(info)
    }
  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addStock={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
