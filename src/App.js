import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stonks: [],
    myPortfolio: []
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
    const newPortfolio = [...this.state.myPortfolio, stonk]
    this.setState({
      myPortfolio: newPortfolio
    })
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
    this.state.stonks.sort(stonk => stonk.name)
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stonks={this.state.stonks} 
          myPortfolio={this.state.myPortfolio} 
          addToPortfolio={this.addToPortfolio} 
          removeFromPortfolio={this.removeFromPortfolio} 
        />
      </div>
    );
  }
}

export default App;

