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
      {
        "_id": "576d2c898babc155b634de62",
        "url": "test_url",
        "name": "test_name",
        "emotions": {
          "smile": 1.527,
          "surprise": 2,
          "negative": 10.303,
          "attention": 100
        },
        "vibes": [
          {
            "_id": "576d2cc6d88ec95ab6715754",
            "image": "http://m.aszdziennik.pl/984fc8c0fda0a9894c282c094986e12d,640,0,0,0.jpg",
            "emotions": {
              "smile": 1.527,
              "surprise": 2,
              "negative": 10.303,
              "attention": 100
            },
          },
          {
            "_id": "576d2cd5d88ec95ab6715755",
            "image": "http://m.aszdziennik.pl/984fc8c0fda0a9894c282c094986e12d,640,0,0,0.jpg",
            "emotions": {
              "smile": 1.527,
              "surprise": 2,
              "negative": 10.303,
              "attention": 100
            },
          }
        ]
      },
      {
        "_id": "576d2c9fd88ec95ab6715753",
        "url": "test_url2",
        "name": "name2",
        "emotions": {
          "smile": 10,
          "surprise": 20,
          "negative": 1.303,
          "attention": 60
        },
        "vibes": [
          {
            "_id": "576d2c9fd88ec95ab6715752",
            "image": "http://m.aszdziennik.pl/984fc8c0fda0a9894c282c094986e12d,640,0,0,0.jpg",
            "emotions": {
              "smile": 1.527,
              "surprise": 2,
              "negative": 10.303,
              "attention": 100
            },
          }
        ]
      }
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
