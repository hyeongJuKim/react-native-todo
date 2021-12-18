import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const EmptyTodo = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.text}>할 일이 없습니다 !</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
  },
});
export default EmptyTodo;
