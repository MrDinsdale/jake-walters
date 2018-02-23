import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import '../stylesheets/app.scss';

class AppWrapper extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

render(<AppWrapper/>, document.getElementById('app'));
