import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredText, setEnteredText] = useState('');

  const onGoalTextChanged = value => {
    setEnteredText(value);
  };
  const onGoalAddHandler = () => {
    props.onGoalAdded(enteredText);
    setEnteredText('');
  };

  onCancelHandler = () => {
    props.onGoalCancelHandler();
    setEnteredText('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goal"
          style={styles.input}
          onChangeText={onGoalTextChanged}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancelHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={
                onGoalAddHandler
                // props.onGoalAdded.bind(this, enteredText)
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
