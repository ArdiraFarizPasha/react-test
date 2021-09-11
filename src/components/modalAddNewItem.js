import { Modal, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import ImageUploading from "react-images-uploading";
import { AddNewItemForm } from './addNewItemForm';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalAddNew } from 'redux/slice';

export const ModalAddNewItem = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => dispatch(setOpenModalAddNew(false))
  const handleShow = () => dispatch(setOpenModalAddNew(true))
  const values = useSelector(state => state.store)
  const isModalOpen = values.isModalAddNew

  // useEffect(() => {
  //   setShow(props.open)
  // }, [])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0rem 2rem'}}>
          <AddNewItemForm />
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