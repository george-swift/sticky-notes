import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../utils/styles";
import { useFocus } from "../utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps): JSX.Element => {
  const [text, setText] = useState('');
  const inputRef = useFocus();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onAdd(text);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        type="text"
        ref={inputRef}
        value={text}
        onChange={handleChange}
        onKeyPress={handleAddText}
      />
      <NewItemButton type="button" onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}