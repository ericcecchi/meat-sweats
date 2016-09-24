import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResultsList from './ResultsList';

import locations from '../fixtures/locations';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <ResultsList items={locations} />
            </MuiThemeProvider>
        );
    }
}

export default App;
