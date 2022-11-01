import React from 'react';
import { ReactDOM } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

// 내부 컴포넌트
const ModalOverlay = props => {
  const content = (
    <div className = {`modal ${props.className}`} style={props.style}>
      <header className = {`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit
          ? props.onSubmit
          : (event) => event.preventDefault
        }
      >
        <div className = {`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className = {`modal__footer ${props.footerClass}`}>
          <h2>{props.footer}</h2>
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPotal(content, document.getElementById('modal-hook'));
}

const Modal = props => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCencel} />}
      <CSSTransition 
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
