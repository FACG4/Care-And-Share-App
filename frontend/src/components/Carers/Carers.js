import React, { Component } from 'react';
import CarerCard from './CarerCard/CarerCard';
import CarerCardBody from './CarerCardBody/CarerCardBody';
import Search from '../Search/Search';


class Carers extends Component {

state = {
    cardShow:false,
    carerCardId:0,
    response:undefined,
    searchResponse: undefined,
    notification:true
  }
  componentDidMount(){
    console.log('id', this.props.userId(this.props.token))
fetch('/carers', {
  method:'POST',
  body: JSON.stringify(this.props.userId(this.props.token)),
  headers: {'Content-Type': 'application/json'}
})
.then(response => response.json())
.catch (error => console.log("error fetch", error))
.then(response => {
  this.setState((prevstate) =>   (
    {
      response: Object.assign([], response)
    }
  )
)
})


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
  friendRequestNotification(){
    this.setState({
      notification:true
    })
  }
  render() {
    const {cardShow:show, response, searchResponse} = this.state;
    return (
      <div className="container-cards">
        <Search handleSearchResponse={this.handleSearchResponse}  response={response} />
        {this.state.searchResponse && this.state.searchResponse.length ?
          <CarerCard response={searchResponse} CarerCardBodyShow={this.CarerCardBodyShow} userId={this.props.userId} token={this.props.token} />
         :
          <CarerCard  response={response} CarerCardBodyShow={this.CarerCardBodyShow} userId={this.props.userId} token={this.props.token} />
        }
        <CarerCardBody response={response} id={this.state.carerCardId} CarerCardBodyHide={this.CarerCardBodyHide} isOpenValue={show} />
      </div>
    );
  }
}

export default Carers;
