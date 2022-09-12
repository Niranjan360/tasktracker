import './App.css';
import Addtask from './comp/Addtask';
import Tasklist from './comp/Tasklist';

function App() {
  return (
    <div className="App">
      <Addtask/>

      <Tasklist/>
    </div>
  );
}

export default App;
