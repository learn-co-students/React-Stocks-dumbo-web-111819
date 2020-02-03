import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolio: [],
    alphaSort: false,
    priceSort: false
  }

  filterStocks = (event) => {
      let filteredArr = this.state.stocks.filter(stock=> stock.type === event.target.value)
      this.setState({
        displayStocks: filteredArr
      })
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(r=>r.json())
      .then(data=>{
        this.setState({
          stocks: data,
          displayStocks: data
        })
      })
  }

  sort = (event) => {
      let sortedArr = []
      if (event.target.value === "Alphabetically"){
        if(this.state.alphaSort === false) {
          sortedArr = this.state.displayStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
          this.setState({
            displayStocks: sortedArr,
            alphaSort: true,
            priceSort: false
          })
        } else {
          this.setState({
            alphaSort: false,
            priceSort: false
          })
        }
      } else {
        if(this.state.priceSort === false) {
          sortedArr = this.state.displayStocks.sort((a, b) => (a.price - b.price))
          this.setState({
            displayStocks: sortedArr,
            alphaSort: false,
            priceSort: true
          })
        } else {
          this.setState({
            alphaSort: false,
            priceSort: false
          })
        }
      }
  } 

  buyStock = (stock) => {
    let newPortfolio = [...this.state.portfolio, stock]
    this.setState({
      portfolio: newPortfolio
    })
  } 

  sellStock = (soldStock) => {
    let newPortfolio = this.state.portfolio.filter(stock => stock !== soldStock)
    this.setState({
      portfolio: newPortfolio
    })
  }


  render() {
    return (
      <div>
        <SearchBar sort={this.sort} alphaSort={this.state.alphaSort} priceSort={this.state.priceSort} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
