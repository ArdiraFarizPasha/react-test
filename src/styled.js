import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 2rem;
`

export const Column = styled.div`
  /* display: flex;
  justify-content: center; */
  padding: 2rem 5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 21px;
  font-family: monospace;
`

export const ButtonShowDetails = styled.button`
  border: none;
  border-radius: 21px;
  background-color: #ffe505;
  font-size: 12px;
  padding: 5px 20px;
`

export const TableRow = styled.tr`
  &:hover {
    background-color: white !important;
  }
`

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const SingleDataWrapper = styled.td`
  display: flex;
  justify-content: center;
`

export const SellItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const SellItemButton = styled.button`
  border: none;
  border-radius: 21px;
  background-color: #ffe505;
  font-size: 14px;
  padding: 5px 20px;
`

export const ButtonUploadImage = styled.button`
  border: none;
  border-radius: 21px;
  background-color: lightblue;
  font-size: 14px;
  padding: 5px 20px;
  margin: 1rem 0rem;
`

export const RemoveImage = styled.button`
  border: none;
  border-radius: 21px;
  background-color: lightpink;
  font-size: 14px;
  padding: 5px 35px;
`

export const FormFieldWrapper = styled.div`
  margin: 1rem 0rem;
`

export const UploadSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonUploadCancelWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const SubmitButton = styled.button`
  border: none;
  border-radius: 21px;
  background-color: lightblue;
  font-size: 14px;
  padding: 5px 20px;
  margin: 1rem 0rem;
  width: 100%;
  font-weight: normal;
`

export const InputField = styled.input`
  width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  padding-left: 10px;
`