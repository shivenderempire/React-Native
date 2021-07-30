import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/imgs/success.png')}
          style={styles.image}
        />
        {/* <Image
          fadeDuration={2000}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg',
          }}
          style={styles.image}
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.result}>
          Your Phone Needed{' '}
          <Text style={styles.higlightText}>{props.totalRounds} </Text> rounds
          to guess the number{' '}
          <Text style={styles.higlightText}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={() => props.onRestartGame()}>
        Restart Game
      </MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 40,
  },
  result: {
    textAlign: 'center',
  },
  higlightText: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary,
  },
});

export default GameOver;
