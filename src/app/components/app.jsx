import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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
    }

    render() {
        const { overview, portfolio, video } = this.props.contentData.content;

        return (
            <div>
                <Header />
                {
                    ( overview && portfolio && video ) ? (
                        <main>
                            <Sidebar />
                            <Content />
                        </main>
                    ) : (
                        <main>
                            <h1>Content is loading</h1>
                        </main>
                    )
                }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
