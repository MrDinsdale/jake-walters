import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from './sections/overview';
import Bio from './sections/bio';
import Contact from './sections/contact';

class Content extends React.Component {
    render() {
        return (
            <div className="c-content">
                <Switch>
                    <Route exact path='/' component={Overview}/>
                    <Route path='/bio' component={Bio}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        );
    }
}

export default Content
