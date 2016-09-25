import React from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: ''
        }
    }

    clearField = () => {
        this.setState({textFieldValue: ''});
        this.props.clearLocations();
    };

    handleTextFieldChange = (e) => {
        this.setState({textFieldValue: e.currentTarget.value});
    };

    searchClickHandler = (e) => {
        this.state.textFieldValue && this.props.onChange(this.state.textFieldValue, false);
    };

    enterKeyHandler = (e) => {
        console.log(e.key);
        if (e.key == 'Enter') {
            this.props.onChange(this.state.textFieldValue, false);
        }
    };

    nearMeClickHandler = (e) => {
        this.props.onChange(null, true);
        this.setState({textFieldValue: "Current Location"});
    };

    render() {
        const nearButton = navigator.geolocation ? (
            <div className="SearchBar-near">
                <IconButton onClick={this.nearMeClickHandler} tooltip="Use my location">
                    <NearMe color={blue500}/>
                </IconButton>
            </div>
        ) : null;
        const clearButton = this.props.isLoading ? (
            <div className="SearchBar-clear">
                <CircularProgress size={.33} />
            </div>
        ) : (
            <div className="SearchBar-clear">
                <IconButton onClick={this.clearField} tooltip="Clear">
                    <Clear hoverColor="gray"/>
                </IconButton>
            </div>
        );

        return (
            <Paper className="SearchBar">
                {nearButton}
                <TextField
                    value={this.state.textFieldValue}
                    onChange={this.handleTextFieldChange}
                    underlineShow={false}
                    className="SearchBar-field"
                    hintText="Search by address"
                    onKeyPress={this.enterKeyHandler}
                />
                <IconButton onClick={this.searchClickHandler} tooltip="Search">
                    <Search hoverColor="gray"/>
                </IconButton>
                {this.state.textFieldValue && clearButton}
            </Paper>
        );
    }
}

export default SearchBar;
