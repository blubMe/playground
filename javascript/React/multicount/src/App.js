import React, { Component } from 'react'
import Header from './components/header'
import Count from './pages/count'
class App extends Component {
  state = {
    counts: [
      {val: 4,id: 1},
      {val: 0,id: 2},
      {val: 1,id: 3}
    ]
  }
  render() {
    return (
      <>
      <Header />
      <Count counter={this.state.counts} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      </>
    );
  }
  handleIncrement = counter => {
    const countsClone = [...this.state.counts]
    const i = countsClone.indexOf(counter)
    countsClone[i] = {...counter}
    countsClone[i].val++
    this.setState({counts: countsClone})
  }
  handleDelete = counterId => {
    const counts = this.state.counts.filter(c => c.id !== counterId)
    this.setState({counts})
  }
  handleReset = () => {
    const counts = this.state.counts.map(c => {
      c.val = 0
      return c;
    })
    this.setState({counts})
  }
}

export default App
