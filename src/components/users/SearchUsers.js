import React, { Component } from 'react'

export class SearchUsers extends Component {


    state = {
        search: ''
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    SearchUsers = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }
    render() {
        const { search } = this.state;
        return (
            <form onSubmit={this.SearchUsers} style={{ marginTop: "50px" }} >
                <div className="form-group">
                    <input placeholder="Search users..." onChange={this.handleForm} value={search} type="text" name="" id="search" className="form-control" placeholder="" aria-describedby="helpId" />
                </div>
                <button className="btn btn-primary btn-block">Search</button>
            </form>
        )
    }
}

export default SearchUsers
