import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './components/app';

import '../stylesheets/app.scss';

import dotenv from 'dotenv'

dotenv.config()

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

render(<AppWrapper/>, document.getElementById('app'));

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/app', () => {
      // if you are using harmony modules ({modules:false})
      render(App)
      // in all other cases - re-require App manually
      render(require('./components/app'))
    })
}
