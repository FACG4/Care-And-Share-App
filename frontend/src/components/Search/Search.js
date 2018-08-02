
import React, { Component } from 'react';
import './style.css';

class Search extends Component {

handleSearch = (e) => {
  e.preventDefault();
  this.props.handleSearchResponse(this.props.response.filter((carer) => e.target.search.value.toLowerCase() === carer.location.toLowerCase()
  ))
}
render(){
  return (
    <div>
<form className="search-form" onSubmit={this.handleSearch}>
<input className="search-input" name="search" type="text" placeholder="search" />
</form>
  </div>
)
}

}


export default Search;
