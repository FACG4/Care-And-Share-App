/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from 'react-modal';
import './style.css';

const CarerCardBody = (props) => {
  const {
    isOpenValue, CarerCardBodyHide, id, response,
  } = props;
  let carer;

  response && (carer = response.filter(card => card.id === id)[0]);

  return (
    <Modal isOpen={isOpenValue} onRequestClose={CarerCardBodyHide} ariaHideApp={false}
      closeTimeoutMS={200} className="modal">

      <div className="modal">
        <h3> A Carer from {' '}
          {
        carer && carer.location
  }
        </h3>
        <h4>

  Age:
          {' '}
          {
        carer && carer.age
  }
        </h4>

        <h4>
  Cared for situation:
        </h4>
        {' '}
        {
        carer && (
        <p>
          {carer.sitution}
        </p>
        )
  }

        <h4>
  What I can offer to other carers ?
        </h4>
        {' '}
        {
        carer && (
        <p>
          {carer.offer}
        </p>
        )
  }
        <h4>
  What I looking for ?
        </h4>
        {' '}
        {
        carer && (
        <p>
          {carer.looking}
        </p>
        )
  }

        <button type="submit">
        <img src="https://i.imgur.com/IDcVgO2.png">
        </img>
        </button>

      </div>
    </Modal>
  );
};

export default CarerCardBody;
