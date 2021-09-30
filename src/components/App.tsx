import { AppContainer } from '../utils/styles';
import { Column } from './Column';
import { NewItem } from './NewItem';
import { CustomDragLayer } from './CustomDragLayer';
import { useAppState } from '../context/AppStateContext';
import { addList } from '../context/actions';

const App = (): JSX.Element => {
  const { lists, dispatch } = useAppState();
  const prompt = (l: typeof lists): string => l.length ? '+ Add another list' : '+ Add list to Sticky Notes';

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map(({id, text}) => (
        <Column key={id} id={id} text={text} />
      ))}
      <NewItem
        toggleButtonText={prompt(lists)}
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  )
}

export default App;
