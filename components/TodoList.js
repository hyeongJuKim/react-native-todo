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
  // console.log('TodoList ' + todos);
  const onToggleHandle = useCallback(toggle => {
    onToggle(toggle);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoListItem
            style={styles.list}
            id={item.id}
            key={item.id}
            checked={item.checked}
            textValue={item.textValue}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
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
