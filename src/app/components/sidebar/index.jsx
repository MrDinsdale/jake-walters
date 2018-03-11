import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import indexToWord from '../utils/index-to-word';

class Sidebar extends React.Component {
    renderPortfolio() {
        const { portfolio } = this.props.content.content;

        return (
            <li>
                <NavLink to="/portfolio" className="c-navigation__item">{portfolio.title}</NavLink>
                <ul>
                    {
                        portfolio.portfolios.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`/portfolio/${item.fields.slug}`} className="c-navigation__item c-navigation__item--sub">{item.fields.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        );
    }

    renderVideo() {
        const { video } = this.props.content.content;

        return (
            <li>
                <NavLink to="/motion" className="c-navigation__item">{video.title}</NavLink>
                <ul>
                    {
                        video.videos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`/motion/${item.fields.slug}`} className="c-navigation__item c-navigation__item--sub">{indexToWord(index)}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        );
    }

    render() {
        const { overview, portfolio, video } = this.props.content.content;

        return (
            <div className="c-sidebar">
                <nav className="c-navigation">
                    <ul>
                        <li><NavLink exact to='/' className="c-navigation__item">{ overview.title }</NavLink></li>
                        { this.renderPortfolio() }
                        { this.renderVideo() }
                        <li><NavLink to="/bio" className="c-navigation__item">bio</NavLink></li>
                        <li><NavLink to="/contact" className="c-navigation__item">contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps({ routing, content }) {
    return {
        routing,
        content
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));