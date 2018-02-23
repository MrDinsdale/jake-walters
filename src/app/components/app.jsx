import React from 'react';

import Header from './header';
import Sidebar from './sidebar';
import Content from './content';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <main>
                    <Sidebar />
                    <Content />
                </main>
            </div>
        );
    }
}

export default App
