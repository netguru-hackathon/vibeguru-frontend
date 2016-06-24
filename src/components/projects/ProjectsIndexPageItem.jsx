import React, { PropTypes }  from 'react'
import styles from '../../stylesheets/projects/Projects'
import EmotionItems from './EmotionItems'
import PhotoItem from './PhotoItem'
import { Panel } from 'react-bootstrap'

export default class ProjectsIndexPageItem extends React.Component {
  render() {
    var photos = this.props.project.vibes.map((photo, i) =>
      <PhotoItem photo={photo} key={i} />
    )

    return (
      <Panel collapsible defaultExpanded header={this.props.project.name}>
        <div className='project-details'>
          <a href={this.props.project.url}>link to project</a>
          <div className='project-details__summary'>
            <h3>Summary</h3>
            <EmotionItems emotions={this.props.project.emotions} />
          </div>
          <div className='project-photos'>
            <h3>Photos</h3>
            {photos}
          </div>
        </div>
      </Panel>
    )
  }
}
