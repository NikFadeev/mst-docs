import { observer } from 'mobx-react';
import React from 'react';
import { StoreType } from '../mst';

type TodoInfoPropsType = {
  store: StoreType
}

const TodoInfo = observer((props: TodoInfoPropsType) => {
  return <div>
    {props.store.pendingCount} pending,
    {props.store.completedCount} completed
  </div>
});

export default TodoInfo;