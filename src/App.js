import './App.css';
import React, { useEffect, useState } from "react"
import { Column, Container, SellItemButton, SellItemButtonWrapper, TableWrapper, TitleWrapper } from './styled';
import { TableData } from './components/table';
import { ModalData } from './components/modal';
import axios from 'axios';
import { GET_ALL_ITEMS } from 'utils/api';
import {ModalAddNewItem} from 'components/modalAddNewItem'

function App() {
  const [items, setItems] = React.useState([])

  const fetchItemList = async () => {
    try {
      const ItemList = await axios.get(GET_ALL_ITEMS)
      setItems(ItemList.data);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchItemList()
  }, [])

  return (
    <Container>
      <TitleWrapper>
        Store Item List
      </TitleWrapper>
      <SellItemButtonWrapper>
        <ModalAddNewItem />
        <SellItemButton>
          Add New Item
        </SellItemButton>
      </SellItemButtonWrapper>
      <TableWrapper>
        <Column className="col-lg-8 col-md-12 col-sm-12">
          <TableData
            data={items}
          />
        </Column>
      </TableWrapper>
    </Container>
  );
}

export default App;
