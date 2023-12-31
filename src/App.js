import './App.css';
import ColumnView from './components/ColumnView';
import Header from './components/Header';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './actions/DataAction';
import { useEffect } from 'react';
function App() {
  // log the imported data
  // console.log(data)

  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <ColumnView />
    </div>
  );
}

export default App;
