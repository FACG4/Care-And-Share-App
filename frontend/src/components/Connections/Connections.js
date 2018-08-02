

/* eslint-disable */
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
// import {browserHistory} from 'react-router';

import Image from './Connection/image';
import OptionModal from './Connection/imageModal';
import './style.css';


class Connection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: undefined,
      response: [],
      fullName: [],
      image: [],
      userId: [],
      modalId:0,
    };
    this.handelOpenModel = this.handelOpenModel.bind(this);
    this.handelCloseModel = this.handelCloseModel.bind(this);
    // handleClick
    // this.handleClick= this.handleClick.bind(this);
  }

  componentDidMount() {
    const url = '/api/MyFriends';
    fetch(url, {
      method: 'POST',
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        // console.log('hh', response);

        this.setState(() => (
          {
            response,
            fullName: response.map(a => a.full_name),
            image: response.map(b => b.image),
            userId: response.map(c => c.id),
          }
        ));
      });
      

  }

  handelOpenModel(id) {
    this.setState({
      selectedOption: true,
      modalId:id

    });
  }

  handelCloseModel() {
    this.setState(() => ({
      selectedOption: false,

    }));
  }




  render() {
    // console.log("dd",this.state.userId);
    
 

    const {
      response, selectedOption, fullName, image, userId,
    } = this.state;

    return (
      <div className="flex-container">



        {


  Object.keys(response).map(key => (
    <Image
      key={key}
      name={fullName[key]}
      src={image[key]}
      id={userId[key]}
      openModel={this.handelOpenModel}
    />
    
  ))}
        <OptionModal selectedOption={selectedOption} closeModel={this.handelCloseModel} userId={this.state.modalId} alluser={this.state.userId} />

        {/* <button onClick={this.handleClick} type="button">ssss
                    </button> */}
      </div>
    );
  }
}

export default Connection;
