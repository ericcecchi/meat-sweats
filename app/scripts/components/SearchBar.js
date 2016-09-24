import React from 'react';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: ''
        }
    }

    handleTextFieldChange = (e) => {
        return e.currentTarget.value;
    };

    searchClickHandler = (e) => {
        this.props.onChange(this.state.textFieldValue);
    };

    render() {
        return (
          <Paper className="SearchBar">
            <TextField
                value={this.state.textFieldValue}
                onChange={this.handleTextFieldChange}
                underlineShow={false}
                className="SearchBar-field"
                hintText="Search by address"
            />
            <IconButton onClick={this.searchClickHandler} tooltip="Search">
                <Search hoverColor="gray"/>
            </IconButton>
            <div className="nearMe">
              <IconButton onClick={this.props.onChange} tooltip="My Location">
                <NearMe color={blue500}/>
              </IconButton>
            </div>
          </Paper>
        );
    }
}

export default SearchBar;
