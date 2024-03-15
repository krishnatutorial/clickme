// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state={count:0}
  onIncrement=()=>{
    this.setState(prevState =>{
      console.log(`previous state is ${prevState.count}`)
      return {count:prevState.count+1}
    })
  }
  render() {
    const {count}=this.state;
    ;<div className="container">
      <h1 className="heading">The Button has been clicked {count} times </h1>
      <p className="para">Click the button to increase the count!</p>
      <button className="button" onClick={this.onIncrement}>Click Me!</button>
    </div>
  }
}
