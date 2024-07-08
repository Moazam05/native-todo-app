import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const TodoScreen = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleSubmit = () => {
    if (title.trim() === "") {
      Alert.alert("Validation Error", "Task title cannot be empty.");
      return;
    }

    if (editTaskId) {
      // Edit existing task
      const newTodoList = todoList.map((task) =>
        task.id === editTaskId ? { ...task, title } : task
      );
      setTodoList(newTodoList);
      setEditTaskId(null);
    } else {
      // Add new task
      const newTodoList = [
        ...todoList,
        {
          id: todoList.length + 1,
          title: title,
        },
      ];
      setTodoList(newTodoList);
    }
    setTitle("");
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        label="Add a task"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={{
          borderRadius: 0,
        }}
      >
        {editTaskId ? "Update Task" : "Add Task"}
      </Button>
      {todoList?.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          No task available
        </Text>
      ) : (
        <>
          <Text>Task List</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {todoList.map((task) => (
              <View
                key={task.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: "#f2f2f2",
                  borderRadius: 5,
                }}
              >
                <Text>{task.title}</Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    onPress={() => {
                      setTitle(task.title);
                      setEditTaskId(task.id);
                    }}
                    textColor="red"
                    style={{
                      borderRadius: 0,
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onPress={() => {
                      const newTodoList = todoList.filter(
                        (todo) => todo.id !== task.id
                      );
                      setTodoList(newTodoList);
                    }}
                    style={{
                      borderRadius: 0,
                    }}
                  >
                    Delete
                  </Button>
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
