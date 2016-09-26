import React from 'react';
import moment from 'moment';

import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const build_maps_url = (params) => {
    const map_url_parameters = [params.street_address, params.city, params.state, params.postal_code];
    return 'https://maps.google.com?q=' + encodeURIComponent(map_url_parameters.join(' '));
};

const maps_redirect = (params) => {
    return (e) => window.open(build_maps_url(params));
};

const Result = (props) => {
    let isOpen = false;
    const now = moment();
    const breakfast = props.meal_types.indexOf('breakfast') >= 0 ? '☕' : '';
    const lunch = props.meal_types.indexOf('lunch') >= 0 ? '🍴' : '';
    const snack = props.meal_types.indexOf('snack') >= 0 ? '🍎' : '';
    Object.values(props.meal_hours).map((mealTime) => {
        const startTime = moment(mealTime.startTime, 'hh:mm');
        const endTime = moment(mealTime.endTime, 'hh:mm');
        if (mealTime.days[now.day() - 1] != 'x' && now.isBetween(startTime, endTime)) {
            isOpen = true;
        }
    });
    const openString = isOpen ? 'Open now' : 'Closed now';
    const availableString = [breakfast, lunch, snack].join(' ').trim();

    return (
        <ListItem
            primaryText={props.name}
            secondaryText={
                <p>
                    {props.street_address}<br />
                    {availableString && availableString + ' • '} <strong>{openString}</strong>
                </p>
            }
            secondaryTextLines={2}
            onTouchTap={maps_redirect(props)}
            rightIcon={(props.distance &&
                <Badge
                    badgeContent={(
                        <span
                            dangerouslySetInnerHTML={{__html: `${props.distance.toFixed(1)}&nbsp;mi`}} />
                    )}
                    badgeStyle={{background: "transparent"}}
                />
            )}
        />
    );
};

Result.defaultProps = {
    name: '',
    street_address: '',
    city: '',
    postal_code: '',
    meal_types: [],
    meal_hours: [],
    distance: 0
};

class ResultsList extends React.Component {
    static defaultProps = {
        items: []
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
                    {(!this.props.items.length) && (
                        <ListItem
                            primaryText="No locations found"
                            secondaryText="Please try another search."
                        />
                    )}
                </List>
            </Paper>
        );
    }
}

export default ResultsList;
