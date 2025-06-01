import React, { Component } from 'react'
import Button from './Button'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      };
    };

    
  render() {
    return (
      <div>
        <div className="counterDisplay">
            <h2>{this.count}</h2>
        </div>
        <div className="btn-group flex justify-center gap-5">
            <Button title=' + INCREMENT' isDanger={false}></Button>
            <Button title=' - DECREMENT' isDanger={true}></Button>
        </div>
      </div>
    )
  }
}