import React, { PropTypes }  from 'react'
import styles from '../../stylesheets/projects/Projects'
import EmotionItems from './EmotionItems'

export default class PhotoItem extends React.Component {
  render() {
  console.log(this.props.photo);
    return (
      <div className='project-photos__photo'>
        <img src={this.props.photo.image} />
        <EmotionItems emotions={this.props.photo.emotions} />
      </div>
    )
  }
}
