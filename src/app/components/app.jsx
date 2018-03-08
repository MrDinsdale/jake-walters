import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Sidebar from './sidebar';
import Content from './content';

import contentCreator from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.contentActions.getContentTypes();
        // this.props.contentActions.getOverviewContent();
        // this.props.contentActions.getPortfolioContent();
        // this.props.contentActions.getVideoContent();
    }

    render() {
        return (
            <div>
                <Header />

            </div>
        );
    }
}

function mapStateToProps({ content }) {
    return {
        contentData: content
    };
}

function mapDispatchToProps(dispatch) {
    return {
        contentActions: contentCreator(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
