import { Modal, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import ImageUploading from "react-images-uploading";
import { RenderForm } from './detailForm';

export const ModalAddNewItem = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   setShow(props.open)
  // }, [])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0rem 2rem'}}>
          <RenderForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}