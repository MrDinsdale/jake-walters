import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getFirstItemSlug } from '../../utils/contentUtils';

class PortfolioRedirect extends React.Component {
  componentDidMount() {
    const { content: { content: { content: { portfolio } } }, history } = this.props;
    if (portfolio) {
      const currentSlug = getFirstItemSlug(portfolio.portfolios);
      history.push(`/portfolio/${currentSlug}/0`);
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

export default withRouter(connect(mapStateToProps)(PortfolioRedirect));
