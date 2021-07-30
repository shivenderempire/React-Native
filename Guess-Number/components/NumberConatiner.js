import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const NumberConatiner = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 22,
    color: Colors.accent,
  },
});

export default NumberConatiner;
