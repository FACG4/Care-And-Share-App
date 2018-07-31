/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line
import React, { Component } from 'react';
import CarerCard from './CarerCard/CarerCard';
import CarerCardBody from './CarerCardBody/CarerCardBody';
import Search from '../Search/Search';
import fetch from '../../helpers/fetch';

class Carers extends Component {

state = {
    cardShow:false,
    carerCardId:0,
    response:undefined,
    searchResponse: undefined
  }

  componentDidMount(){
    const handleFetch = {
      method: 'POST',
      url: '/carers',
    }
    fetch(handleFetch, (response) => {
      response = JSON.parse(response);
      this.setState((prevstate) =>   (
        {
          response: Object.assign([], response)
        }
      )
    )
  }
);
  }

handleSearchResponse = (response) => {
  this.setState(() =>   (
    {
      searchResponse: Object.assign([], response)
    }
  )
)
}

CarerCardBodyShow = (carerCardId) => {
     this.setState({
       cardShow:true,
       carerCardId
     })
  }
CarerCardBodyHide = () =>{
     this.setState({
       cardShow:false
     })
  }
  render() {
    const {cardShow:show, response, searchResponse} = this.state;
    return (
      <div className="container">

        <Search handleSearchResponse={this.handleSearchResponse}  response={response} />
        {this.state.searchResponse && this.state.searchResponse.length ?
          <CarerCard  response={searchResponse} CarerCardBodyShow={this.CarerCardBodyShow} cardName="Carer Card" />
         :
          <CarerCard  response={response} CarerCardBodyShow={this.CarerCardBodyShow} cardName="Carer Card" />
        }
        <CarerCardBody response={response} id={this.state.carerCardId} CarerCardBodyHide={this.CarerCardBodyHide} isOpenValue={show} />
      </div>
    );
  }
}

export default Carers;
