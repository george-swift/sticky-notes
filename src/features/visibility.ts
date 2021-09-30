import { DragItem } from "../features/DragItem"

export const visibility = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return Boolean(
    !isPreview &&
    draggedItem &&
    draggedItem.type === itemType &&
    draggedItem.id === id
  )
}