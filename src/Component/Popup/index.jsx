import React from 'react'
import Modal from 'rsuite/esm/Overlay/Modal'
const Popup = ({show,handleClose,heading,children}) => {
  return (
    <Modal open={show} onClose={handleClose}>
    <Modal.Header>
      <Modal.Title>{heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    
  </Modal>
  )
}

export default Popup