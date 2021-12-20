import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Animated as functionSet,
  FlatList,
} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  list: {
    flex: 1,
  },
});

export default React.memo(TodoList);
