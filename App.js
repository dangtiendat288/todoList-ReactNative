import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import store from "./store/index";
import Test from "./components/Test";

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
      {/* <Test /> */}
    </Provider>
  );
}

// const [task, setTask] = useState();
// const [taskItems, setTaskItems] = useState([]);

// const handleAddTask = () => {
//   Keyboard.dismiss();
//   setTaskItems([...taskItems, task]);
//   setTask(null);
// };

// const completeTask = (index) => {
//   let itemsCopy = [...taskItems];
//   itemsCopy.splice(index, 1);
//   setTaskItems(itemsCopy);
// };

// let appState = {
//   data: [
//     { title: "Go to the mall", isFinished: true },
//     { title: "Go to the school", isFinished: false },
//     { title: "Go to church", isFinished: true },
//     { title: "Go to the cinema", isFinished: false },
//     { title: "Go to the stadium", isFinished: true },
//   ],
// };
