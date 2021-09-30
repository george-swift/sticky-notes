import styled from 'styled-components';

type AddButtonProps = {
  dark?: boolean
}
interface DragPreviewContainerProps {
  isHidden?: boolean
  isPreview?: boolean
}

type DragPreviewWrapperProps = {
  position: {
    x: number
    y: number
  }
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${props => (props.isHidden ? 0 : 1)};
`

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`
    }
  })
)<DragPreviewWrapperProps>``

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const ColumnContainer = styled(DragPreviewContainer)`
  width: 300px;
  margin-bottom: 1.5rem;
  min-height: 50px;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
  background-color: #ebecf0;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 992px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled(DragPreviewContainer)`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  font-family: 'Lato', sans-serif;
  color: #34495e;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: #091e4240 0 1px 0 0;
`

export const AddItemButton = styled.button<AddButtonProps>`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  background-color: #ffffff3d;
  font-size: 14px;
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

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`