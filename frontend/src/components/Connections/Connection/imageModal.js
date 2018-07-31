/* eslint-disable */
import Modal from 'react-modal';
import React from 'react';


const OptionModal = props =>  (
  <Modal
    isOpen={props.selectedOption}
    contentLabel="Slected Option"
    onRequestClose={props.closeModel}
    className="modal--style"
  >
    <button className="btn--style" type="button">send Massage </button>
    <button className="btn--style" type="button" >
    profile 
   </button>
    <button className="btn--style" type="button">delete </button>
   

    <span onClick={props.closeModel}>close</span>
  </Modal>
);

Modal.setAppElement('#root');


export default OptionModal;
