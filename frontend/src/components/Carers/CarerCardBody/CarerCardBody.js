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
    <Modal
      isOpen={isOpenValue}
      onRequestClose={CarerCardBodyHide}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
    >

      <div className="modal">

        <h5>

  A Carer from
          {' '}
          {
        carer && carer.location
  }
        </h5>
        <h5>

  Age:
          {' '}
          {
        carer && carer.age
  }
        </h5>

        <h5>
  Cared for situation:
        </h5>
        {' '}
        {
        carer && (
        <p>
          {carer.sitution}
        </p>
        )
  }

        <h5>
  What I can offer to other carers ?
        </h5>
        {' '}
        {
        carer && (
        <p>
          {carer.offer}
        </p>
        )
  }
        <h5>
  What I looking for ?
        </h5>
        {' '}
        {
        carer && (
        <p>
          {carer.looking}
        </p>
        )
  }

        <button type="submit" onClick={CarerCardBodyHide}>
  Close
        </button>
        <button type="submit">
  Add Request
        </button>

      </div>
    </Modal>
  );
};

export default CarerCardBody;
