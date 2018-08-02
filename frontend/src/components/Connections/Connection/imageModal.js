/* eslint-disable react/jsx-filename-extension */
import Modal from 'react-modal';
import React from 'react';


const OptionModal = ({ selectedOption, closeModel }) => (
  <Modal
    isOpen={selectedOption}
    contentLabel="Slected Option"
    onRequestClose={closeModel}
    className="modal--style"
  >
    <button className="btn--style" type="button">
send Massage

    </button>
    <button className="btn--style" type="button">
    profile
    </button>
    <button className="btn--style" type="button">
delete

    </button>


    <span onClick={closeModel}>
close
    </span>
  </Modal>
);

Modal.setAppElement('#root');


export default OptionModal;
