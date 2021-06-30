import './App.css';
import Todoinput from './components/TodoInput'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'


function App() {
  return (
    <div className="App">
      <header className='App-header'><h1>Todo List</h1></header>
      <Todoinput />
        <TodoList />
        <DoneList/>
    </div>
  );
}

export default App;
