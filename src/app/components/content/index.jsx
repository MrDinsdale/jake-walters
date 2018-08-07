import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from './sections/overview';
import Portfolio from './sections/portfolio';
import Motion from './sections/motion';
import Bio from './sections/bio';
import Contact from './sections/contact';

import PortfolioRedirect from './utils/portfolio-redirect';
import MotionRedirect from './utils/motion-redirect';

class Content extends React.Component {
  render() {
    return (
      <div className="c-content">
        <Switch>
          <Route exact path='/' component={Overview} />
          <Route exact path='/portfolio' component={PortfolioRedirect} />
          <Route path='/portfolio/:slug?/:image?' component={Portfolio} />
          <Route exact path='/motion' component={MotionRedirect} />
          <Route path='/motion/:slug?' component={Motion} />
          <Route path='/bio' component={Bio}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Content;