import './App.css';
import React, { useEffect, useState } from "react"
import { Column, Container, SellItemButton, SellItemButtonWrapper, TableWrapper, TitleWrapper } from './styled';
import { TableData } from './components/table';
import { ModalData } from './components/modal';
import axios from 'axios';
import { DELETE_ITEM, GET_ALL_ITEMS } from 'utils/api';
import { ModalAddNewItem } from 'components/modalAddNewItem'
import { useSelector, useDispatch } from 'react-redux'
import { setItemList } from 'redux/slice';


function App() {
  const [items, setItems] = React.useState([])
  const dispatch = useDispatch()
  const values = useSelector((state) => state.store)
  const itemList = values.itemList
  console.log(itemList, '<<< item list')

  const fetchItemList = async () => {
    try {
      const response = await axios.get(GET_ALL_ITEMS)
      dispatch(setItemList(response.data))
      setItems(response.data)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchItemList()
  }, [dispatch])

  return (
    <Container>
      <TitleWrapper>
        Store Item List
      </TitleWrapper>
      <SellItemButtonWrapper>
        <ModalAddNewItem />
      </SellItemButtonWrapper>
      <TableWrapper>
        <Column className="col-lg-8 col-md-12 col-sm-12">
          <TableData
            data={itemList}
          />
        </Column>
      </TableWrapper>
    </Container>
  );
}

export default App;
