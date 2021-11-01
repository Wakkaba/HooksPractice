import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

export const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onHideCart}/>
}

export const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalHelper = document.getElementById('overlays')

export const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart} />, portalHelper)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalHelper)}
    </React.Fragment>
  )
}