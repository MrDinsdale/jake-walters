import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Overview from './sections/overview';
import Portfolio from './sections/portfolio';
import Motion from './sections/motion';
import Bio from './sections/bio';
import Contact from './sections/contact';

class Content extends React.Component {
    render() {
        const { overview, portfolio, video } = this.props.content.content;
        return (
            <div className="c-content">
                <Switch>
                    <Route exact path='/' component={Overview} />
                    <Route path='/portfolio/:slug?/:image?' component={Portfolio} />
                    <Route path='/motion' component={Motion} />
                    <Route path='/bio' component={Bio}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps({ content }) {
    return {
        content
    };
}

export default withRouter(connect(mapStateToProps)(Content));