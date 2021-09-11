import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { ButtonShowDetails, TableRow, TrashIcon } from 'styled'
import { ModalData } from './modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { DELETE_ITEM } from 'utils/api'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { handleDeleteItemFromList } from 'redux/slice'

export const TableData = (props) => {
  const dispatch = useDispatch()

  const showPopUp = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteItem(id)
      }
    })
  }

  const handleDeleteItem = async (id) => {
    try {
      const deleted = await axios.delete(DELETE_ITEM(id))
      if (deleted) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        dispatch(handleDeleteItemFromList(id))
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Details</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, idx) => {
          return (
            <TableRow>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td style={{ width: '30%' }}>
                <ModalData
                  data={item}
                />
              </td>
              <td>
                <TrashIcon
                  onClick={() => showPopUp(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </TrashIcon>
              </td>
            </TableRow>
          )
        })}
      </tbody>
    </Table>
  )
}