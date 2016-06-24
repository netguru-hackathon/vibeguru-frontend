import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/projects'
import styles from '../../stylesheets/projects/Projects'
import ProjectsItem from '../../components/projects/ProjectsIndexPageItem'

export default class ProjectsIndexPage extends React.Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(actions.fetchProjects(1, per));
  // }

  render() {
    // const { isFetching, projects } = this.props

    var projects = [
      { name: 111 },
      { name: 222 }
    ]

    var projectsList, ridesPagination
    if (projects) {
      projectsList = projects.map((project, i) =>
        <ProjectsItem project={project} key={i} />
      )
    } else {
      projectsList = 'No projects'
    }

    return (
      <div className='projects'>
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
