import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const TodoScreen = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        label="Add a task"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Button
        mode="contained"
        onPress={() => {
          const newTodoList = [
            ...todoList,
            {
              id: todoList.length + 1,
              title: title,
            },
          ];
          setTodoList(newTodoList);
          setTitle("");
        }}
        style={{
          borderRadius: 0,
        }}
      >
        Add
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
            {todoList.map((task) => {
              return (
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
              );
            })}
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
