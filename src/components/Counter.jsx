import React, { Component, useState } from 'react'
import Button from './Button'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      };
    }
  render() {
    return (
      <div>
        <div className="counterDisplay mt-5">
            <h2 className='text-5xl p-7'>Count : {this.state.count}</h2>
        </div>
        <div className="btn-group flex justify-center gap-5 mt-2">
            <Button title='INCREMENT' icon={<i class="fa-solid fa-plus"></i>} isDanger={false}></Button>
            <Button title='DECREMENT' icon={<i class="fa-solid fa-minus"></i>} isDanger={true}></Button>
        </div>
      </div>
    )
  }
}