import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const tasks = ['Task 1...', 'Task 2...', 'Task 3...', 'Task 4...'];
  const completed = ['Done 1...', 'Done 2...'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrackIt</Text>

      {/* To-Do Section */}
      <Text style={styles.sectionTitle}>To-Do</Text>
      <View style={styles.todoSection}>
        <ScrollView contentContainerStyle={styles.taskList}>
          {tasks.map((task, idx) => (
            <View key={idx} style={styles.taskCard}>
              <Text style={styles.taskText}>{task}</Text>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="information-circle-outline" size={20} color="#965f32" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="checkmark-done-outline" size={20} color="#965f32" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Done Section */}
      <Text style={styles.sectionTitle}>Done</Text>
      <View style={styles.doneSection}>
        <ScrollView contentContainerStyle={styles.doneList}>
          {completed.map((task, idx) => (
            <View key={idx} style={styles.doneCard}>
              <Text style={styles.doneText}>{task}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7C4B5',
    paddingTop: 60,
    paddingHorizontal: 20,
    color: "#25283D",
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  todoSection: {
    flex: 0.75,
  },
  taskList: {
    gap: 12,
    paddingBottom: 20,
  },
  taskCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#965f32',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  iconBtn: {
    marginLeft: 8,
  },
  doneSection: {
    flex: 0.25,
    marginTop: 10,
  },
  doneList: {
    gap: 10,
    paddingBottom: 20,
  },
  doneCard: {
    backgroundColor: '#e0f0ed',
    borderRadius: 8,
    padding: 10,
  },
  doneText: {
    fontSize: 16,
    color: '#444',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#965f32',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
