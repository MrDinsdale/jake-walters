import React from 'react';
import {render} from 'react-dom';
import '../stylesheets/app.scss';

import Header from './components/header';
import Navigation from './components/navigation';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Navigation />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
