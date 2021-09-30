import { DragItem } from "../features/DragItem";

export type List = {
  id: string
  text: string
  tasks: Task[]
}

export type Task = {
  id: string
  text: string
}

export type AppState = {
  lists: List[]
  draggedItem: DragItem | null
}
