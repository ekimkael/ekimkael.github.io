import { FETCH_WORKS, FETCH_A_WORK } from '../actions/types'

const initialState = {
  works: [],
  work: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_WORKS: {
      return {
        ...state,
        works: action.payload
      }
    }

    case FETCH_A_WORK: {
      return {
        ...state,
        work: action.payload
      }
    }

    default:
      return state;
  }
}