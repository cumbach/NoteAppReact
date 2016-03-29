import uuid from 'node-uuid';

//////////////////////////////////
// DUX
// A file that contains constants, action-creators and reducers
//

//////////////////////////////////
// CONSTANTS
//
export const CREATE_LANE = 'CREATE_LANE'



//////////////////////////////////
// ACTION CREATORS
//
function action(type, payload = {}) {
  return {type, ...payload}
}

export const createLane = lane => action(CREATE_LANE, {
  lane: {
    id: uuid.v4(),
    notes: lane.notes || [],
    ...lane
  }
})


////////////////////////////////
// REDUCERS
//
export const lanes = (state = [], action) => {
  switch(action.type) {
    case CREATE_LANE:
      return [...state, action.lane]
    default:
      return state
  }
}
