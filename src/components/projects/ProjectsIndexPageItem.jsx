import React, { PropTypes }  from 'react'
import styles from '../../stylesheets/projects/Projects'

export default class ProjectsIndexPageItem extends React.Component {
  render() {
    return (
      <div className='project'>
        <div className='project-details'>
          <div className='project-details__name'>{this.props.project.name}</div>
        </div>
      </div>
    )
  }
}
