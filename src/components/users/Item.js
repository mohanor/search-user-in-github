import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Item extends Component {

    render() {
        const { full_name, created_at } = this.props.repo;

        return (
            <List divided relaxed>
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a'>{full_name}</List.Header>
                        <List.Description as='a'>created at {created_at}</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        );
    }

}

export default Item;