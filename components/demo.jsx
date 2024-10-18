import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert 
} from 'react-native';

export default function Demo() {
  const [task, setTask] = useState(''); // To store the input task
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty.');
      return;
    }

    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask(''); // Clear the input after adding
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
