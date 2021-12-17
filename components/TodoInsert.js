import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');
  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 적어주세요"
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        value={newTodoItem}
        autoCorrect={false}
        onEndEditing={addTodoHandler}
      />
      <View style={styles.button}>
        <Icon
          name="pluscircle"
          style={styles.addIcon}
          size={30}
          color="#3143e8"
          onPress={addTodoHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
  addIcon: {
    margin: 8,
  },
});

export default React.memo(TodoInsert);
