import { Action } from "./actions";
import { AppState } from "./stateTypes";
import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/helpers";

export const appReducer = (draft: AppState, action: Action): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break
    }

    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetIndex].tasks.push({
        id: nanoid(),
        text
      });
      break
    }

    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);

      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break
    }

    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload;
      break
    }

    case 'MOVE_TASK': {
      const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } = action.payload;
      const sourceIndex = findItemIndexById(draft.lists, sourceColumnId);
      const targetIndex = findItemIndexById(draft.lists, targetColumnId);
      const dragIndex = findItemIndexById(draft.lists[sourceIndex].tasks, draggedItemId);
      const hoverIndex = hoveredItemId ? findItemIndexById(draft.lists[targetIndex].tasks, hoveredItemId) : 0;
      const item = draft.lists[sourceIndex].tasks[dragIndex];
      draft.lists[sourceIndex].tasks.splice(dragIndex, 1);
      draft.lists[targetIndex].tasks.splice(hoverIndex, 0, item);
      break
    }
  
    default:
      break;
  }
};


