import React, { Component } from 'react'
export default class Counter extends Component {
  render() {
    return (
      <div>
          <h2 className='text-black text-6xl pt-10'> Counter App</h2>
            <div className="counterDisplay">
                <h2 className='text-6xl pt-36 pb-28 text-black'>Count : 0</h2>
            </div>
            <div className="btn-group flex justify-center gap-5 mt-2">
                <div className="w-2/12">
                    <button className="p-2 m-2 rounded-md w-full text-white center text-lg bg-green-600">INCREMENT</button>
                </div>
                <div className="w-2/12">
                    <button className="p-2 m-2 rounded-md w-full text-white center text-lg bg-red-600">DECREMENT</button>
                </div>
            </div>
          <div className="w-1/5 m-auto mt-3">
            <button className="p-2 m-2 rounded-md w-full text-white center text-lg bg-cyan-900">RESET</button>
          </div>
        </div>
    )
  }
}