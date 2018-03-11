import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { filterBySlug } from '../../utils/contentUtils';

import contentCreator from '../../../actions';

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
        if (this.props.routing.location.pathname !== prevProps.routing.location.pathname) {
            this.handleLocationChange();
        }
    }
    // THIS IS ALL BOLLOCKS:
    handleLocationChange() {
        const { match: { params }, location: { pathname }, content: { content: { portfolio } } } = this.props;
        const currentSlug = params.slug ? params.slug : portfolio.portfolios[0].fields.slug;
        const currentImage = params.image ? params.image : '1';

        if (!params.slug && !params.image) {
            this.props.history.push(`${pathname}/${currentSlug}/${currentImage}`);
        } else if (!params.image) {
            this.props.history.push(`${pathname}/${currentImage}`);
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
        const { params } = this.props.match;
        const { currentPortfolio } = this.state;

        if (currentPortfolio) {
            return (
                <div className="c-section c-section--portfolio">
                    <figure className="c-gallery-item">
                        <img src={currentPortfolio.image[params.image].fields.file.url} className="c-gallery-item__image" />
                        <figcaption className="c-gallery-item__caption">{currentPortfolio.image[params.image].fields.title}</figcaption>
                    </figure>
                </div>
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
