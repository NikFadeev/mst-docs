import { values } from 'mobx';
import { getSnapshot, types, Instance } from 'mobx-state-tree';

const Todo = types.model({
  name: types.optional(types.string, ""),
  done: types.optional(types.boolean, false)
})
  .actions(self => {
    const setName = (newName: string) => {
      self.name = newName
    }

    const toggle = () => {
      self.done = !self.done
    }

    return { setName, toggle }
  });

const User = types.model({
  name: types.optional(types.string, "")
})

const RootStore = types.model({
  users: types.map(User),
  todos: types.map(Todo)
})
  .views(self => ({
    get pendingCount(): number {
      //@ts-ignore
      return values(self.todos).filter(todo => todo && !todo.done).length;
    },
    get completedCount(): number {
      //@ts-ignore
      return values(self.todos).filter(todo => todo && todo.done).length;
    }
  }))
  .actions(self => {
    const addTodo = (id: string, name: string) => {
      self.todos.set(id, Todo.create({ name, done: false }));
    }

    return { addTodo };
  });

export const store = RootStore.create({
  users: {},
  todos: {
    "1": {
      name: 'Eat a cake',
      done: true
    }
  }
})


export interface StoreType extends Instance<typeof store>{}
export interface TodoType extends Instance<typeof Todo>{}