import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    filterBy: '',
    alphabetize: false,
    priceSort: false
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
      .then(resp => resp.json())
      .then(json => this.setState({stocks: json}, () => console.log(this.state.stocks)))
  }

  onClickBuyStock = (id) => {
    let clickedStock = this.state.stocks.find(stock => stock.id === id)
    this.setState({boughtStocks: Array.from(new Set([...this.state.boughtStocks, clickedStock]))})
  }

  onClickSellStock = (id) => {
    this.setState(prevState => {
      let filteredStocks = prevState.boughtStocks.filter(stock => stock.id !== id)
      return {
        boughtStocks: filteredStocks
      }
    })
  }

  filterStocks = (filterValue) => {
    this.setState({filterBy:filterValue})
  }

  renderStocks = () => {
    return this.state.stocks.filter(stock => stock.type.includes(this.state.filterBy))
  }
  
  //Sorting
  
  sort = (e) => {
    if(e.target.value === 'alphabetize'){
      this.setState({alphabetize: true, priceSort: false})
    } else if(e.target.value === 'priceSort'){
      this.setState({alphabetize: false, priceSort: true})
    }
  }

  sortAlphabetically = (inputArray) => {
    return [...inputArray].sort((stockA,stockB) => stockA.ticker.localeCompare(stockB.ticker))
  }

  sortByPrice = (inputArray) => {
    return [...inputArray].sort((stockA, stockB) => stockA.price-stockB.price )
  }

  renderSorts = (inputArray) => {
    if(this.state.alphabetize){
      return this.sortAlphabetically(inputArray)
    }else if(this.state.priceSort){
      return this.sortByPrice(inputArray)
    } else{
      return this.state.stocks
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks ={this.filterStocks} priceSortToggle ={this.priceSortToggle} alphabetizeToggle ={this.alphabetizeToggle} sort = {this.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks ={this.renderSorts(this.renderStocks())} onClickBuyStock={this.onClickBuyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks = {this.state.boughtStocks} onClickSellStock={this.onClickSellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
