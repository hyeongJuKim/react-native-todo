import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Animated as functionSet,
} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  // console.log('TodoList ' + todos);
  const onToggleHandle = useCallback(toggle => {
    onToggle(toggle);
  }, []);

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
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 15,
  },
});

export default React.memo(TodoList);
