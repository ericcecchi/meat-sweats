import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResultsList from './ResultsList';
import SearchBar from './SearchBar';

import {getLocations} from './API';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        getLocations()
            .then((locations) => {
                this.setState({
                    locations
                });
            });
    }

    render() {
        console.log('App state', this.state);
        return (
            <MuiThemeProvider>
                <div>
                    <SearchBar />
                    <ResultsList items={this.state.locations} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
