

/* eslint-disable */
import React, { Component } from 'react';

import Image from './Connection/image';
import OptionModal from './Connection/imageModal';
import './style.css';


class Connection extends Component {

  constructor(){
    super();
    this.state={
      FrindesInfo: {1:'eman',2:'ahmed',3:'ishak',4:'ahmed'},
      selectedOption:undefined
    }
    this.handelOpenModel= this.handelOpenModel.bind(this);
    this.handelCloseModel = this.handelCloseModel.bind(this);


  }
handelOpenModel(){
this.setState(()=>({
  selectedOption:true

}))
  }
  handelCloseModel(){
    this.setState(()=>({
      selectedOption:false

    }))
  }



  render() {
   const {FrindesInfo,selectedOption} = this.state;

    return (
      <div className="flex-container">


  {
  Object.keys(FrindesInfo).map((key)=><Image
   key={key}
   id={key}
  name={FrindesInfo[key]}
  openModel={this.handelOpenModel}
   />)}
  <OptionModal selectedOption={selectedOption} closeModel={this.handelCloseModel}/>
      </div>
    );
  }
}

export default Connection;
