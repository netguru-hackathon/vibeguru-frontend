import * as types from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  projects: [],
}

export default function projects(state = initialState, action) {
  switch (action.type) {
  case types.PROJECTS_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.PROJECTS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      projects: action.projects,
    });
  default:
    return state;
  }
}
