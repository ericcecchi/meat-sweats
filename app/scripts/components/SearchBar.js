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
            <div>
              <Paper>
                <TextField hintText="Search by address"/>
                <IconButton tooltip="Search">
                  <Search hoverColor="gray"/>
                </IconButton>
                <div className="nearMe">
                  <IconButton tooltip="My Location">
                    <NearMe color={blue500}/>
                  </IconButton>
                </div>
              </Paper>
            </div>
        );
    }
}

export default SearchBar;
