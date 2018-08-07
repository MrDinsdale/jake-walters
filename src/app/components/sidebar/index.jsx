import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import indexToWord from '../utils/index-to-word';

const Sidebar = ({
  content: {
    content: {
      overview,
      portfolio,
      video
    }
  }
}) => {
  const renderSubnav = (content, contentPath) => (
    <ul className="c-sub-nav">
      { content.map((item, index) => {
        return (
          <li key={index}>
            <NavLink to={`${contentPath}/${item.fields.slug}`} className="c-navigation__item c-navigation__item--sub">
              {indexToWord(index)}
            </NavLink>
          </li>
        )
      })}
    </ul>
  );

  return (
    <div className="c-sidebar">
      <nav className="c-navigation">
        <ul>
          <li><NavLink exact to='/' className="c-navigation__item">{overview.title}</NavLink></li>
          <li>
            <NavLink to={`/portfolio`} className="c-navigation__item">{portfolio.title}</NavLink>
            {renderSubnav(portfolio.portfolios, '/portfolio')}
          </li>
          <li>
            <NavLink to={`/motion`} className="c-navigation__item">{video.title}</NavLink>
            {renderSubnav(video.videos, '/motion')}
          </li>
          <li><NavLink to="/bio" className="c-navigation__item">bio</NavLink></li>
          <li><NavLink to="/contact" className="c-navigation__item">contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

function mapStateToProps({ routing, content }) {
  return {
    routing,
    content
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
