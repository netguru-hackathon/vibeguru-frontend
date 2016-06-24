import React, { PropTypes }  from 'react'
import { connect }           from 'react-redux';

export default class Application extends React.Component {
  render () {
    const { dispatch, children } = this.props
    return (
      <div>
        <div id='main' className='container'>
          {children}
        </div>
      </div>
    )
  }
}

Application.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function select(state) {
  return {};
}

export default connect(select)(Application);
