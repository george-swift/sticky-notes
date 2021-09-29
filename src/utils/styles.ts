import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #3179ba;
`

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 50px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 0.5rem;
  flex-grow: 0;
  background-color: #ebecf0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: #091e4240 0 1px 0 0;
`

type AddButtonProps = {
  dark?: boolean
}

export const AddItemButton = styled.button<AddButtonProps>`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  transition: background 85ms ease-in;

  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  padding: 6px 12px;
  box-shadow: none;
  text-align: center;
  color: #fff;
`

export const NewItemInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
`