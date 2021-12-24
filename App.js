import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Alert} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import EmptyTodo from './components/EmtypTodo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(text => {
    if (text.trim() === '') {
      return;
    }
    setTodos(todos => [
      ...todos,
      {id: Math.random(), textValue: text, checked: false},
    ]);
  }, []);

  const onRemove = useCallback(
    id => e => {
      Alert.alert('할일 삭제', '정말로 삭제하시겠습니까?', [
        {
          text: '예',
          onPress: () =>
            setTodos(todos => todos.filter(todo => todo.id !== id)),
        },
        {text: '아니오'},
      ]);
    },
    [],
  );

  const onToggle = useCallback(
    id => e => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>할 일 목록</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        {todos.length === 0 ? (
          <EmptyTodo />
        ) : (
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 20,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default App;
