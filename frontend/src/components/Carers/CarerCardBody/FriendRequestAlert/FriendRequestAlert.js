import React from 'react';
import Modal from 'react-modal';

const FreindrequestAlert = (props) => {
  const {
    isOpenValue, FreindRequestAlertHide,
  } = props;
  return (
    <Modal
      isOpen={isOpenValue}
      onRequestClose={FreindRequestAlertHide}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="alert-modal"
    >
      <div>
        {props.msg}
      </div>
    </Modal>
  );
};


export default FreindrequestAlert;
