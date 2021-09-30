import { createContext, useContext, Dispatch, FC } from 'react';
import { useImmerReducer } from 'use-immer';
import { List, Task, AppState } from './stateTypes';
import { Action } from './actions';
import { appReducer } from './appReducer';
import { DragItem } from '../features/DragItem';
import { nanoid } from 'nanoid';

const appData: AppState = {
  lists: [
    {
      id: nanoid(),
      text: 'To Do',
      tasks: []
    },
    {
      id: nanoid(),
      text: 'In Progress',
      tasks: []
    },
    {
      id: nanoid(),
      text: 'Completed',
      tasks: []
    }
  ],
  draggedItem: null
};

type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appReducer, appData);
  const { draggedItem, lists } = state;
  const getTasksByListId = (id: string) => lists.find((list) => list.id === id)?.tasks || [];

  return (
    <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppStateContextProps => useContext(AppStateContext)
