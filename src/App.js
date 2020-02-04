import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stonks: [],
    myPortfolio: [],
    alphaSort: false,
    priceSort: false,
    filterBy: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/stonks")
    .then(r => r.json())
    .then(stonks => {
      this.setState({
        stonks
      })
    })
  }

  addToPortfolio = (stonk) => {
    if (!this.state.myPortfolio.includes(stonk)){
      const newPortfolio = [...this.state.myPortfolio, stonk]
      this.setState({
        myPortfolio: newPortfolio
      })
    }
  }

  removeFromPortfolio = (stonk) => {
    const idx = this.state.myPortfolio.findIndex(stock => stock.id === stonk.id)
    const newPortfolio = this.state.myPortfolio
    newPortfolio.splice(idx, 1)
    this.setState({
      myPortfolio: newPortfolio
    })
  }

  filterStonks = () => {
    console.log('filter', this.state.filterBy)
    if (this.state.filterBy) {
      return this.state.stonks.filter(stonk => stonk.type === this.state.filterBy)
    } else {
      return this.state.stonks
    }
  }

  sortedStonks = () => {
    // console.log('filter function', this.filterStonks())
    const unsortedStonks = this.filterStonks()
    if (!this.state.alphaSort && !this.state.priceSort) {
      return this.state.stonks
    } else if (this.state.alphaSort) {
      return unsortedStonks.sort((a, b) => { 
        return (a.name > b.name) ? +1 : (a.name < b.name) ? -1 : 0
      })
    } else if (this.state.priceSort) {

      // return unsortedStonks.sort((a, b) => {
      //   return (a.price > b.price) ? +1 : (a.price < b.price) ? -1 : 0
      // })

      // return unsortedStonks.sort((a, b) => {
      //   return a.price - b.price
      // })

      return unsortedStonks.sort(({price: a}, {price: b}) => b - a)
    }
  }

  toggleAlphaSort = () => {
    this.setState(prevState => {
      return {
        alphaSort: !prevState.alphaSort,
        priceSort: false
      }
    })
  }

  togglePriceSort = () => {
    this.setState(prevState => {
      return {
        priceSort: !prevState.priceSort,
        alphaSort: false
      }
    })
  }

  setFilterBy = (value) => {
    // console.log(value)
    this.setState({filterBy: value})
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stonks={this.sortedStonks()} 
          myPortfolio={this.state.myPortfolio} 
          addToPortfolio={this.addToPortfolio} 
          removeFromPortfolio={this.removeFromPortfolio} 
          alphaSort={this.state.alphaSort}
          toggleAlphaSort={this.toggleAlphaSort}
          priceSort={this.state.priceSort}
          togglePriceSort={this.togglePriceSort}
          // filterStonks={this.filterStonks}
          setFilterBy={this.setFilterBy}
        />
      </div>
    );
  }
}

export default App;

