import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({item, onDelete}) => {
  return (
    <Pressable
      onPress={() => onDelete(item.id)}
      style={({pressed}) =>
        pressed ? styles.listItemPressed : styles.listItem
      }>
      <View>
        <Text>{item.value}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  listItemPressed: {
    padding: 10,
    margin: 5,
    backgroundColor: 'rgb(210, 230, 255)',
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default GoalItem;
