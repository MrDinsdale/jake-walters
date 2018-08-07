import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getFirstItemSlug } from '../../utils/contentUtils';

class MotionRedirect extends React.Component {
  componentDidMount() {
    const { content: { content: { content: { video } } }, history } = this.props;
    if (video) {
      const currentSlug = getFirstItemSlug(video.videos);
      history.push(`/motion/${currentSlug}`);
    }
  }

  render() {
    return <h1>Something went wrong</h1>
  }
}

function mapStateToProps(content) {
  return {
    content
  };
}

export default withRouter(connect(mapStateToProps)(MotionRedirect));
