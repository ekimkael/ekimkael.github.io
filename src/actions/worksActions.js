import { FETCH_WORKS, FETCH_A_WORK } from './types'

export const allWorks = function() {
  return function(dispatch) {
    fetch(`https://kael.now.sh/works?&_limit=7`)
      .then(res => res.json())
      .then(works => dispatch({
        type: FETCH_WORKS,
        payload: { works }
      }))
  }
}

export const work = function() {
  return function(dispatch) {
    fetch(`https://kael.now.sh/w/${workID}`)
      .then(res => res.json())
      .then(work => dispatch({
        type: FETCH_A_WORK,
        payload: { work }
      }))
  }
}