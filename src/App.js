import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stonks: [],
    myPortfolio: [],
    alphaSort: false,
    priceSort: false
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
    const theIndex = this.state.myPortfolio.findIndex(stock => stock.id === stonk.id)
    const newPortfolio = this.state.myPortfolio
    newPortfolio.splice(theIndex, 1)
    this.setState({
      myPortfolio: newPortfolio
    })
  }

  sortedStonks = () => {
    const sortedStonks = this.state.stonks
    if (this.state.alphaSort) {
      sortedStonks.sort((a, b) => { return a.name - b.name})
    }
    if (this.state.sortPrice) {
      sortedStonks.sort(stonk => stonk.price)
    }
    return sortedStonks
  }

  toggleAlphaSort = () => {
    console.log('haha u sorted me')
    // if (this.state.alphaSort) {
      this.setState(prevState => {
        return {
          alphaSort: !prevState.alphaSort
        }
      })
    // }
  }

  // toggleAlphaSort = () => {
  //   if (this.state.alphaSort) {
  //     this.setState({
  //       alphaSort: false
  //     })
  //   } else {
  //     this.setState({
  //       alphaSort: true
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stonks={this.sortedStonks()} 
          myPortfolio={this.state.myPortfolio} 
          addToPortfolio={this.addToPortfolio} 
          removeFromPortfolio={this.removeFromPortfolio} 
          toggleAlphaSort={this.toggleAlphaSort}
          alphaSort={this.state.alphaSort}
        />
      </div>
    );
  }
}

export default App;

