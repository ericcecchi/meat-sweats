import React from 'react';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Paper className="SearchBar">
            <TextField
                underlineShow={false}
                className="SearchBar-field"
                hintText="Search by address"
            />
            <IconButton tooltip="Search">
              <Search hoverColor="gray"/>
            </IconButton>
            <div className="nearMe">
              <IconButton tooltip="Use Current Location">
                <NearMe color={blue500}/>
              </IconButton>
            </div>
          </Paper>
        );
    }
}

export default SearchBar;
