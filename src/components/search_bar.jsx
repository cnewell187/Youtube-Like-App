import React from 'react';

// import React, {Component} from 'react'; is same as adding another line var Component = React.Component

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    //this is a method like render: function()
    render() {
        return (
            <div className = "search-bar">


          <input value ={this.state.term} onChange={event =>this.onInputChange(event.target.value) }/>
          Value of the input: {this.state.term}
          </div>

        );
    }

    onInputChange(term) {

        this.setState({term: term})
        this.props.onSearchTermChange(term)
    }
}

// var SearchBar = React.createClass({
//
// })

export default SearchBar;
