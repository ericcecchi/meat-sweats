import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

export default function run() {
    injectTapEventPlugin();

    ReactDOM.render(<App />, document.getElementById('app'));
}
