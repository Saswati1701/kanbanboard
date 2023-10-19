import './App.css';
import data from './api/data.json'
import ColumnView from './components/ColumnView';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getData, parseDataAsPerGroup } from './actions/apiAction';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("status"));
  }, []);

  return (
    <div className="App">
      <Header />
      <ColumnView />
    </div>
  );
}

export default App;
