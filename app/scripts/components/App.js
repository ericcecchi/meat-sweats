import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

import ResultsList from './ResultsList';
import SearchBar from './SearchBar';

import {getLocations} from './API';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            locations: null
        }
    }

    getLocations() {
        this.setState({
            isLoading: true
        });
        getLocations()
            .then((locations) => {
                this.setState({
                    locations,
                    isLoading: false
                });
            });
    }

    componentDidMount() {
        // this.getLocations();
    }

    render() {
        console.log('App state', this.state);
        return (
            <MuiThemeProvider>
                <div>
                    <SearchBar onChange={getLocations} />
                    {this.state.isLoading && <LinearProgress mode="indeterminate" />}
                    {this.state.locations && <ResultsList items={this.state.locations} />}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
