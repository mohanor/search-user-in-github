import React, { Component } from 'react'
import axios from 'axios';
import UserInfo from './UserInfo';
import UserRepo from './UserRepo';
export class UserItem extends Component {

    state = {
        user: [],
        login: ''
    }
    componentWillMount() {
        const login = this.props.match.params.login;
        this.state.login = login;
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }

    render() {
        const { user, login } = this.state;
        return (
            <div className="row" style={{ marginTop: "60px" }}>
                <div>
                    <h1>Repositories</h1>
                    <UserRepo login={login} />
                </div>
                <div className="col-md-8 container">
                    <UserInfo user={user} />
                    <div>
                        <img src={'https://github-readme-stats.vercel.app/api?username=' + login + '&show_icons=true&theme=default'} />
                        <img src={'https://github-readme-stats.vercel.app/api/top-langs/?username=' + login} />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserItem
