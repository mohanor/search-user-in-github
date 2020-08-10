import React, { Component } from 'react'
import axios from 'axios';
export class Following extends Component {

    state = {
        following: []
    }

    componentWillMount() {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}/following`)
            .then(response => {
                this.setState({
                    following: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 container">
                        <div>
                            {this.state.following.map(follow => (
                                <div className="col-md-3">
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>
                                    <h1>hjhjhj</h1>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Following
