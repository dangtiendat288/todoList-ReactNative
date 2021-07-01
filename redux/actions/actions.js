import { ADD, DELETE } from "./actionTypes";
let nextId = 0;

export const addTask = (task) => ({
  type: ADD,
  payload: {
    id: ++nextId,
    task,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
});

export const deleteTask = (id) => ({
  type: DELETE,
  payload: { id },
});
