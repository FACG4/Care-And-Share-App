/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line
import React, { Component } from 'react';


class Search extends Component {

handleSearch = (e) => {
  e.preventDefault();
  this.props.handleSearchResponse(this.props.response.filter((carer) => e.target.search.value === carer.interests || e.target.search.value === carer.location
  ))
}
render(){
  return (
    <div>
<form onSubmit={this.handleSearch}>
<input name="search" type="text" />
<button type="submit" name="searchBtn">search</button>
</form>
  </div>
)
}

}


export default Search;
