import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../utils/useDrag";
import { ColumnContainer, ColumnTitle } from "../utils/styles";
import { NewItem } from "./NewItem";
import { useAppState } from "../context/AppStateContext";
import { addTask, moveList, moveTask, setDraggedItem } from "../context/actions";
import { visibility } from "../features/visibility"
import Card from "./Card";

type ColumnProps = {
  id: string
  text: string
  isPreview?: boolean
}

export const Column = ({ text, id, isPreview }: ColumnProps): JSX.Element => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id);
  const prompt = (t: typeof tasks): string => t.length ? '+ Add another task' : '+ Add task';

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id))
      } else {
        if (draggedItem.columnId === id) return;
        if (tasks.length) return;
        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
      }
    }
  });

  const { drag } = useItemDrag({ id, text, type: 'COLUMN'});

  drag(drop(ref));

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={visibility(draggedItem, 'COLUMN', id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} columnId={id} />
      ))}
      <NewItem
        toggleButtonText={prompt(tasks)}
        onAdd={text => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}