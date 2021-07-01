import React from 'react';
import './App.css';
import { StoreType, TodoType } from './mst';
import { observer } from 'mobx-react'
import { v1 } from 'uuid';
import { values } from 'mobx';
import Todo from './Components/Todo';
import TodoInfo from './Components/TodoInfo';

type AppProps = {
  store: StoreType
}

const App = observer((props: AppProps) => {
  return (
    <div className="App">
      <button onClick={e => props.store.addTodo(v1(), "new todo")}>
        Add Task
      </button>
      <hr />
      {values(props.store.todos).map(todo => (
        <Todo todo={todo as TodoType} />
      ))}
      <hr />
      <TodoInfo store={props.store} />
    </div>
  );
})

export default App;
