import 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as cons from '../constants/constants'

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}

export function fetchProjects(page = 1, per = 10) {
  return dispatch => {
    dispatch(projectsRequest());
    return fetch(cons.APIEndpoints.PROJECTS, {
      method: 'get',
      headers: {
        'Accept': 'application/vnd.blabla-clone-v1+json',
        'Content-Type': 'application/json'
      }
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(projectsSuccess(json)))
    .catch(errors => dispatch(projectsFailure(errors)))
  };
}

export function projectsRequest() {
  return {
    type: types.PROJECTS_REQUEST,
  };
}

export function projectsSuccess(json) {
  return {
    type: types.PROJECTS_SUCCESS,
    projects: json.projects,
  }
}

export function projectsFailure(errors) {
  return {
    type: types.PROJECTS_FAILURE,
    errors: errors
  }
}
