import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './components/input/input';
import ListTags from './components/listTags/listTags';
import ListNotes from './components/listNotes/listNotes';
import { addData } from './redux/actions/actions';

export interface State {
  tags: { data: [] },
  notes: { data: []}
}

function App() {
  const tagsData = useSelector((state: State) => state.tags.data);
  const notesData = useSelector((state: State) => state.notes.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => dispatch(addData(data)))
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Input />
        <ListTags tags={tagsData} />
        <ListNotes notes={notesData} />
      </div>
    </>
  );
}

export default App;
