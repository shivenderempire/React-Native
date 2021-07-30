import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Headers';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [totalRounds, setTotalRouds] = useState(0);

  const startGameHandler = startNumber => {
    setUserNumber(startNumber);
  };
  const RestartGameHandler = () => {
    setTotalRouds(0);
    setUserNumber(null);
  };

  const gameOverHandler = noOfRounds => {
    setTotalRouds(noOfRounds);
  };

  let content = <StartGameScreen onstartGame={startGameHandler} />;
  // content = (
  //   <GameOver
  //     totalRounds={2}
  //     userNumber={22}
  //     onRestartGame={RestartGameHandler}
  //   />
  // );
  if (userNumber && totalRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (totalRounds > 0) {
    content = (
      <GameOver
        totalRounds={totalRounds}
        userNumber={userNumber}
        onRestartGame={RestartGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
