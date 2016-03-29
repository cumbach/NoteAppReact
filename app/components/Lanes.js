import React from 'react';
import Lane from './Lane.js';
import { connect } from 'react-redux'
import { createLane } from '../dux/lanes'



@connect(
  (state) => ({
    lanes: state.lanes
  })
)

export default class Lanes extends React.Component {

  render() {
    const {lanes, createLane} = this.props
    return (
      <div>
        <button onClick={onAddLane} >+</button>
        <ul className="lanes">{lanes.map(lane =>
          <li className="lane" key={lane.id}>
            <Lane
              onAddLane={onAddLane.bind(null, lane.id)} />
          </li>
        )}</ul>
      </div>
    )
  }
}
