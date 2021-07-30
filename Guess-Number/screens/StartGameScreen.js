import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberConatiner from '../components/NumberConatiner';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';


const StartGameScreen = props => {
  const [enteredText, setEnteredText] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputChangedHandler = inputText => {
    setEnteredText(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredText('');
    setConfirmed(false);
  };
  const submitInputHandler = () => {
    const numericNumber = parseInt(enteredText);
    if (isNaN(numericNumber) || numericNumber <= 0 || numericNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'User has to be enter number between 01 and 99',
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setEnteredText('');
    setSelectedNumber(numericNumber);
    Keyboard.dismiss();
  };

  let confirmedNumber;
  if (confirmed) {
    confirmedNumber = (
      <Card style={styles.summaryContainer}>
        <BodyText>You have Selected </BodyText>
        <NumberConatiner>{selectedNumber}</NumberConatiner>
        <MainButton onPress={() => props.onstartGame(selectedNumber)}>
          
          START GAME
        </MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText> Enter the Number</BodyText>
          <Input
            onChangeText={inputChangedHandler}
            value={enteredText}
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={submitInputHandler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>

        {confirmedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    width: '100%',
    flex: 1,
    margin: 2,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    margin: 10,
    alignItems: 'center',
  },
});

export default StartGameScreen;
