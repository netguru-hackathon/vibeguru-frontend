import React, { PropTypes }  from 'react'
import styles from '../../stylesheets/projects/Projects'
import PieChart from 'react-simple-pie-chart'

export default class EmotionItems extends React.Component {
  render() {
    var sum = this.props.emotions.smile + this.props.emotions.surprise + this.props.emotions.negative

    var smilePercent = Math.round(this.props.emotions.smile * 100 / sum)
    var surprisePercent = Math.round(this.props.emotions.surprise * 100 / sum)
    var negativePercent = Math.round(this.props.emotions.negative * 100 / sum)

    var smileSlices = [
      {
        color: '#f00',
        value: smilePercent,
      },
      {
        color: '#fff',
        value: 100 - smilePercent,
      }
    ]

    var surpriceSlices = [
      {
        color: '#0f0',
        value: surprisePercent,
      },
      {
        color: '#fff',
        value: 100 - surprisePercent,
      }
    ]

    var negativeSlices = [
      {
        color: '#00F',
        value: negativePercent,
      },
      {
        color: '#fff',
        value: 100 - negativePercent,
      }
    ]

    var attentionSlices = [
      {
        color: '#FF0',
        value: this.props.emotions.attention,
      },
      {
        color: '#fff',
        value: 100 - this.props.emotions.attention,
      }
    ]

    return (
      <div className='project-details__charts'>
        <div className='project-details__chart'>
          <PieChart slices={smileSlices} />
          <div className='project-details__info'>Smile {smilePercent} %</div>
        </div>
        <div className='project-details__chart'>
          <PieChart slices={surpriceSlices} />
          <div className='project-details__info'>Surprise {surprisePercent} %</div>
        </div>
        <div className='project-details__chart'>
          <PieChart slices={negativeSlices} />
          <div className='project-details__info'>Negative {negativePercent} %</div>
        </div>
        <div className='project-details__chart'>
          <PieChart slices={attentionSlices} />
          <div className='project-details__info'>Attention {this.props.emotions.attention} %</div>
        </div>
      </div>
    )
  }
}
