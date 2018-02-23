import React from 'react';

import Navigation from './navigation';
import ImageControl from './image-control';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="c-sidebar">
                <Navigation />
                <ImageControl />
            </div>
        );
    }
}

export default Sidebar
