import React from 'react';

class Navigation extends React.Component {
    render() {
        const { galleries } = this.props;

        return (
            <nav class="c-navigation">
                <ul>
                    <li class="c-navigation__item">overview</li>
                    <li class="c-navigation__item">portfolio</li>
                    <li class="c-navigation__item">motion</li>
                    <li class="c-navigation__item">bio</li>
                    <li class="c-navigation__item">contact</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation