import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const TodoScreen = () => {
  const [form, setForm] = useState({
    title: "",
  });
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "First Task",
    },
    {
      id: 2,
      title: "Second Task",
    },
  ]);

  console.log("todoList", todoList);

  return (
    <View style={styles.wrapper}>
      <TextInput
        label="Add a task"
        value={form.title}
        onChange={(e) => {
          setForm({ ...form, title: e.target.value });
        }}
      />
      <Button
        mode="contained"
        onPress={() => {
          const newTodoList = [
            ...todoList,
            {
              id: todoList.length + 1,
              title: form.title,
            },
          ];
          setTodoList(newTodoList);
          setForm({ title: "" });
        }}
        style={{
          borderRadius: 0,
        }}
      >
        Add
      </Button>
      <Text>
        {todoList?.length === 0 ? (
          "Empty List"
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
              {todoList.map((task, index) => (
                <Text key={index}>{task}</Text>
              ))}
            </View>
          </>
        )}
      </Text>
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
