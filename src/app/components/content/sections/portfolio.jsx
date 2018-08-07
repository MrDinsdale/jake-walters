import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Gallery from '../../gallery';
import { filterBySlug, getFirstItemSlug } from '../../utils/contentUtils';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPortfolio: false
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
    const { match: { params }, content: { content: { portfolio } } } = this.props;
    const currentSlug = params.slug ? params.slug : getFirstItemSlug(portfolio.portfolios);
    const currentImage = params.image ? params.image : '0';

    if (!params.slug) {
      this.props.history.push(`/portfolio/${currentSlug}/0`);
    } else if (!params.image) {
      this.props.history.push(`/portfolio/${currentSlug}/${currentImage}`);
    } else {
      this.getCurrentPortfolio();
    }
  }

  getCurrentPortfolio() {
    const { match: { params: { slug } }, content: { content: { portfolio } } } = this.props;
    const currentPortfolio = filterBySlug(portfolio.portfolios, slug);
    this.setState({ currentPortfolio });
  }

  render() {
    const { match: { params } } = this.props;
    const { currentPortfolio } = this.state;

    if (currentPortfolio.image) {
      return (
        <Gallery
          images={currentPortfolio}
          currentImage={params.image}
        />
      );
    }

    return <h1>loading</h1>
  }
}

function mapStateToProps({ content, routing }) {
  return {
    content,
    routing
  };
}

export default withRouter(connect(mapStateToProps)(Portfolio));
