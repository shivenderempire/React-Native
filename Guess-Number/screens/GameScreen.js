import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from '../components/Card';
import NumberConatiner from '../components/NumberConatiner';
import defaultStyles from '../constants/default-styles';
import DefaultStyle from '../constants/default-styles';
import MainButton from '../components/MainButton';
import Icon from 'react-native-vector-icons/Ionicons';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNo = Math.floor(Math.random() * (max - min)) + min;
  if (rndNo === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNo;
  }
};

// const listItem = (guess, numOfItem) => (
//   <View key={numOfItem} style={styles.listItem}>
//     <Text>#{numOfItem}</Text>
//     <Text>{guess}</Text>
//   </View>
// );

const listItem = (itemLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{itemLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);
const GameScreen = props => {
  const {userChoice, onGameOver} = props;
  const initialNo = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialNo);
  const [prevGuess, setPrevGuess] = useState([initialNo.toString()]);
  //const [totalRounds, setTotalRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      // onGameOver(totalRounds);
      onGameOver(prevGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'higher' && currentGuess > props.userChoice)
    ) {
      console.log('ithe aaya');
      Alert.alert('Dont lie to me', 'You know the right number', [
        {text: 'Sorry', style: 'Cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const NextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(NextNumber);
    // setTotalRounds(prevstate => prevstate + 1);
    setPrevGuess(currGuess => [NextNumber.toString(), ...currGuess]);
  };
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Oppnent's Choice</Text>
      <NumberConatiner>{currentGuess}</NumberConatiner>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Icon name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <Icon name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* 
        <ScrollView contentContainerStyle={styles.list}>
          {prevGuess.map((guess, index) =>
            listItem(guess, prevGuess.length - index),
          )}
        </ScrollView>
       */}
        <FlatList
          keyExtractor={(item, index) => index}
          data={prevGuess}
          renderItem={listItem.bind(this, prevGuess.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  list: {
    flexGrow: 1,
    //alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
});
export default GameScreen;
