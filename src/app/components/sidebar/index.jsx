import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ImageControl from './image-control';

class Sidebar extends React.Component {
    renderNestedNavigation(items, parentName, parentPath) {
        return (
            <li>
                <NavLink to={ parentPath } className="c-navigation__item has-sub-nav">{ parentName }</NavLink>
                <ul>
                    {
                        items.map((item, index) => (
                            <li>{ item.name }</li>
                        ))
                    }
                </ul>
            </li>
        )
    }

    render() {
        console.log(this.props.contentData);
        const { portfolios, videos} = this.props.contentData.content;
        return (
            <div className="c-sidebar">
                <nav className="c-navigation">
                    <ul>
                        <li><NavLink exact to='/' className="c-navigation__item">overview</NavLink></li>
                        { this.renderNestedNavigation(portfolios, 'portfolio', '/portfolio') }
                        <li>
                            <NavLink to="/motion" className="c-navigation__item">motion</NavLink>
                        </li>
                        <li><NavLink to="/bio" className="c-navigation__item">bio</NavLink></li>
                        <li><NavLink to="/contact" className="c-navigation__item">contact</NavLink></li>
                    </ul>
                </nav>
                <ImageControl />
            </div>
        );
    }
}

function mapStateToProps({ content }) {
    return {
        contentData: content
    };
}

export default connect(mapStateToProps)(Sidebar);