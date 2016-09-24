import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResultsList from './ResultsList';
import SearchBar from './SearchBar';

import {getLocations} from './API';
import food from '../../fixtures/food.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            locations: null,
            food: food[Math.floor(Math.random() * food.length)]
        }
    }

    getLocations = () => {
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
    };

    componentDidMount() {
        // this.getLocations();
    }

    render() {
        console.log('App state', this.state);
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Free <span title="food">{this.state.food}</span> near you.</h1>
                    <SearchBar isLoading={this.state.isLoading} onChange={this.getLocations} />
                    {this.state.locations && <ResultsList items={this.state.locations} />}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
