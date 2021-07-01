import { observer } from 'mobx-react';
import React from 'react';
import { TodoType } from '../mst';

type TodoPropsType = {
  todo: TodoType
}

const Todo = observer((props: TodoPropsType) => {
  return <div>
    <input type="checkbox" checked={props.todo.done} onChange={e => props.todo.toggle()}/>
    <input type="text" value={props.todo.name} onChange={e => props.todo.setName(e.target.value)}/>
  </div>
})

export default Todo;