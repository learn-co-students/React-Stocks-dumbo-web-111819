import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    myPortfolio: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => {
      this.setState({
        stocks
      })
    })
  }

  addToPortfolio = (stock) => {
    const newPortfolio = [...this.state.myPortfolio, stock]
    this.setState({
      myPortfolio: newPortfolio
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} myPortfolio={this.state.myPortfolio} addToPortfolio={this.addToPortfolio} />
      </div>
    );
  }
}

export default App;
