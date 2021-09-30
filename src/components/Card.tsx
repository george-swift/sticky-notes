import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../utils/useDrag";
import { visibility } from "../features/visibility";
import { useAppState } from "../context/AppStateContext";
import { moveTask } from "../context/actions";
import { CardContainer } from "../utils/styles";


type CardProps = {
  id: string
  columnId: string
  text: string
  isPreview?: boolean
}

const Card = ({ text, id, columnId, isPreview }: CardProps): JSX.Element => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'CARD', id, text, columnId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type !== 'CARD') return;
      if (draggedItem.id !== id) return;
      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
    }
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={visibility(draggedItem, 'CARD', id, isPreview)}
    >
      {text}
    </CardContainer>
  )
}

export default Card;