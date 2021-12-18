import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoListItem = ({textValue, id, checked, onToggle, onRemove}) => {
  console.log('TodoListItem: ' + textValue);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)} activeOpacity={0.5}>
        <View style={styles.completeCircle}>
          {checked ? (
            <Icon name="checkbox-blank-circle" size={30} color="#3143e8" />
          ) : (
            <Icon
              name="checkbox-blank-circle-outline"
              size={30}
              color="#3143e8"
            />
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            <Icon name="delete" size={30} color="#e33507" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default React.memo(TodoListItem);
