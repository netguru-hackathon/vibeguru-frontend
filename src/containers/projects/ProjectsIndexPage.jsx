import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/projects'
import styles from '../../stylesheets/projects/Projects'
import ProjectsItem from '../../components/projects/ProjectsIndexPageItem'
import _ from 'lodash'

export default class ProjectsIndexPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchProjects());
  }

  render() {
    const { isFetching, projects } = this.props

    var projectsList
    if (isFetching) {
      'loading'
    } else {
      if (_.isEmpty(projects)) {
        projectsList = 'No projects'
      } else {
        projectsList = projects.map((project, i) =>
          <ProjectsItem project={project} key={i} />
        )
      }
    }

    return (
      <div className='projects'>
        <h1>VIBEGURU</h1>
        {projectsList}
      </div>
    )
  }
}

ProjectsIndexPage.PropTypes = {
  projects: PropTypes.array.isRequired
}

function select(state) {
  return {
    isFetching: state.projects.isFetching,
    projects: state.projects.projects
  };
}

export default connect(select)(ProjectsIndexPage);
