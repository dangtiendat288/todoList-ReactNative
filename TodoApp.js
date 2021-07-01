import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import { connect } from "react-redux";
import { addTask, deleteTask } from "./redux/actions/actions";

const TodoApp = ({ todo_list, addTask, deleteTask }) => {
  const [task, setTask] = React.useState("");

  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks!</Text>
          <View style={styles.items}>
            {todo_list.map((todo) => (
              <TouchableOpacity
                key={todo.id}
                onPress={() => handleDeleteTask(todo.id)}
              >
                <Task text={todo.task} color={todo.color} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task!"
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  };
};

const mapDispatchToProps = { addTask, deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText: {},
});
