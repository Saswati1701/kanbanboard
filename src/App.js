import './App.css';
import data from './api/data.json'
import ColumnView from './components/ColumnView';
import Header from './components/Header';

function App() {
  // log the imported data
  // console.log(data)
  return (
    <div className="App">
      <Header />
      <ColumnView />
    </div>
  );
}

export default App;
