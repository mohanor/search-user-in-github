import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class UserInfo extends Component {
    render() {

        const { login, avatar_url, html_url, repos_url, followers, following, name, location, public_repos, blog, followers_url, bio, company } = this.props.user;

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Login : {login}</h2>
                        <p className="card-text">
                            <h3>Name : {name}</h3>
                            <h3>Bio : {bio}</h3>
                            <h3>Company :{company}</h3>
                            <h3>Location : {location}</h3>
                            <h3>Followers : {followers}</h3>
                            <h3>Following : {following}</h3>
                            <h3>Public_repos : {public_repos}</h3>
                            <div>
                                <a href={blog} className="btn btn-warning">Blog</a>
                                <Link to={followers_url} className="btn btn-warning">followers</Link>
                                <Link to={`following/${login}`} className="btn btn-warning">following</Link>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo
