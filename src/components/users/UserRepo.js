import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

class UserRepo extends Component {

    state = {
        repos: []
    }

    componentWillMount() {
        const { login } = this.props;
        axios.get(`https://api.github.com/users/${login}/repos`)
            .then(response => {
                this.setState({
                    repos: response.data
                })
            })
    }

    render() {

        return (
            <div>
                {
                    this.state.repos.map(repo => {
                        return (<div className="col-md-3">
                            <Item repo={repo} />
                        </div>);
                    })
                }
            </div>

        );
    }

}


export default UserRepo;