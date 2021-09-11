import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { ButtonShowDetails, TableRow } from 'styled'
import { ModalData } from './modal'

export const TableData = (props) => {
  const [open, setModalOpen] = useState(false)
  return (
    <Table hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, idx) => {
          return (
            <TableRow>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>
                <ModalData 
                  data={item}
                />
              </td>
            </TableRow>
          )
        })}
      </tbody>
    </Table>
  )
}