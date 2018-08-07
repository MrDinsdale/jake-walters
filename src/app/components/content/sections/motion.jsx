import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { filterBySlug, getFirstItemSlug } from '../../utils/contentUtils';

class Motion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: false
    };
  }

  componentDidMount() {
    this.handleLocationChange();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.handleLocationChange();
    }
  }

  handleLocationChange() {
    const { match: { params }, content: { content: { video } } } = this.props;

    const currentSlug = params.slug ? params.slug : getFirstItemSlug(video.videos);

    if (!params.slug) {
      this.props.history.push(`/video/${currentSlug}/0`);
    } else {
      this.getCurrentVideo();
    }

  }

  getCurrentVideo() {
    const { match: { params: { slug } }, content: { content: { video } } } = this.props;
    const currentVideo = filterBySlug(video.videos, slug);

    this.setState({ currentVideo });
  }

  render() {
    const { currentVideo } = this.state;

    return (
      <div className="c-section c-section--motion">
        <figure className="c-gallery-item">
          <iframe src={`https://player.vimeo.com/video/${currentVideo.videoId}`} width="960" height="540" frameBorder="0" autoPlay="1" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          <figcaption className="c-gallery-item__caption">{currentVideo.title}</figcaption>
        </figure>
      </div>
    );
  }
}

function mapStateToProps({ content, routing }) {
  return {
    content,
    routing
  };
}

export default withRouter(connect(mapStateToProps)(Motion));
