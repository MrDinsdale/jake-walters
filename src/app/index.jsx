import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import '../stylesheets/app.scss';

import App from './components/app';

import dotenv from 'dotenv';
dotenv.config();

class AppWrapper extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}

if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App)
    render(require('./components/app'))
  })
}

render(<AppWrapper/>, document.getElementById('app'));
