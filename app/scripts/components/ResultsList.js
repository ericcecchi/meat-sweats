import React from 'react';
import Paper from 'material-ui/Paper';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import moment from "moment";

const Result = (props) => {
    let isOpen = false;
    const now = moment();
    const breakfast = props.meal_types && props.meal_types.indexOf('breakfast') >= 0 && '☕';
    const lunch = props.meal_types && props.meal_types.indexOf('lunch') >= 0 && '🍴';
    const snack = props.meal_types && props.meal_types.indexOf('snack') >= 0 && '🍎';
    const openTimes = Object.values(props.meal_hours).map((mealTime) => {
        const startTime = moment(mealTime.startTime, 'hh:mm');
        const endTime = moment(mealTime.endTime, 'hh:mm');
        if (mealTime.days[now.day() - 1] != 'x' && now.isBetween(startTime, endTime)) {
            isOpen = true;
        }
    });
    const openString = isOpen ? 'Open now' : 'Closed now';

    return (
        <ListItem
            primaryText={props.name}
            secondaryText={
                <p>
                    {props.street_address}<br />
                    {breakfast} {lunch} {snack} • {openString}
                </p>
            }
            secondaryTextLines={2}
        />
    );
};

class ResultsList extends React.Component {
    static defaultProps = {
        items: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className="ResultsList">
                <List>
                    <Subheader>Nearby</Subheader>
                    {this.props.items.map((item, i, items) => {
                        return (
                            <div key={item.id}>
                                <Result {...item}/>
                                {i < items.length - 1 && <Divider />}
                            </div>
                        )
                    })}
                    {(!this.props.items.length || this.props.items.length == 0) && (
                        <Result
                            name="No locations found"
                            street_address="Please try another search."
                        />
                    )}
                </List>
            </Paper>
        );
    }
}

export default ResultsList;
