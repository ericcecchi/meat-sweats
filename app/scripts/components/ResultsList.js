import React from 'react';
import Paper from 'material-ui/Paper';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const Result = (props) => (
    <ListItem
        primaryText={props.name}
        secondaryText={
            <p>{props.street_address}</p>
        }
        secondaryTextLines={2}
    />
);

class ResultsList extends React.Component {
    defaultProps = {
        items: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <List>
                    <Subheader>Nearby</Subheader>
                    {this.props.items.map((item, i, items) => {
                        return (
                            <div>
                                <Result {...item}/>
                                {i < items.length - 1 && <Divider />}
                            </div>
                        )
                    })}
                </List>
            </Paper>
        );
    }
}

export default ResultsList;
