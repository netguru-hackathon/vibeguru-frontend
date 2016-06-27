import React, { PropTypes }  from 'react'
import styles from '../../stylesheets/projects/Projects'
import EmotionItems from './EmotionItems'

export default class PhotoItem extends React.Component {
  render() {
    var link = 'http://' + this.props.photo.image
    return (
      <div className='project-photos__photo'>
        <img src={link} />
        <EmotionItems emotions={this.props.photo.emotions} />
      </div>
    )
  }
}
