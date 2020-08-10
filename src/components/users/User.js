import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
export class User extends Component {
    // state = {
    //     user: []
    // }
    // componentWillMount() {
    //     axios.get(`https://api.github.com/users/${this.props.user.login}`)
    //         .then(response => {
    //             this.setState({
    //                 user: response.data
    //             })
    //         })
    // }
    render() {

        const { login, avatar_url, bio } = this.props.user;

        return (
            <div>
                <Card>
                    <Image src={avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{login}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='info circle' />
                            <Link to={'/users/' + login}>Show more</Link>
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default User
