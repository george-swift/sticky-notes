import { useEffect } from "react";
import { ConnectDragSource, useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DragItem } from "../features/DragItem";
import { useAppState } from "../context/AppStateContext";
import { setDraggedItem } from "../context/actions";

type DragHook = {
  drag: ConnectDragSource
}

export const useItemDrag = (item: DragItem): DragHook => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item
    },
    end: () => dispatch(setDraggedItem(null))
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview]);

  return { drag };
}