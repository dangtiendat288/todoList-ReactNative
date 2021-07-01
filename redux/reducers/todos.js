import { ADD, DELETE } from "../actions/actionTypes";

const initialState = {
  todo_list: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const { id, task, color } = action.payload;
      return { ...state, todo_list: [...state.todo_list, { id, task, color }] };
    }

    case DELETE: {
      const { id } = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id),
      };
    }
    default:
      return state;
  }
};

export default todos;
