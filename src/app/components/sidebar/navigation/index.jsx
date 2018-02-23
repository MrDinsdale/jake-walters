import React from 'react';

class Navigation extends React.Component {
    render() {
        const { galleries } = this.props;

        return (
            <nav className="c-navigation">
                <ul>
                    <li className="c-navigation__item">overview</li>
                    <li className="c-navigation__item">portfolio</li>
                    <li className="c-navigation__item">motion</li>
                    <li className="c-navigation__item">bio</li>
                    <li className="c-navigation__item">contact</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation
