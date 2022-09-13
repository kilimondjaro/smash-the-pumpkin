import { useState } from 'react';

import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Button } from './ui/Button';
import { Background } from './ui/Background';
import { AppContainer } from './ui/AppContainer';
import { Pumpkin, pumpkinDimensions } from './ui/Pumpkin';
import { startTimer } from './utils/timer';
import { getRandomNumber } from './utils/random';

type GameState = 'initial' | 'gameInProgress' | 'gameOver';
const gameTimeLimitInSeconds = 10;

export default function App() {
  // States section

  const [pumpkinLeftOffset, setPumpkinLeftOffset] = useState(0);
  const [pumpkinTopOffset, setPumpkinTopOffset] = useState(0);

  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<GameState>('initial');
  const [timeLeft, setTimeLeft] = useState(gameTimeLimitInSeconds);

  const screenDimensions = useWindowDimensions();

  // Actions section
  const startGame = () => {
    setGameState('gameInProgress');
    setScore(0);
    setTimeLeft(gameTimeLimitInSeconds);

    startTimer({
      timeout: gameTimeLimitInSeconds,
      tickInterval: 1,
      onTick: () => setTimeLeft(timeLeft => timeLeft - 1),
      onFinish: () => setGameState('gameOver'),
    });
  };

  const handlePumpkinPress = () => {
    setPumpkinLeftOffset(getRandomNumber(screenDimensions.width - pumpkinDimensions.width));
    setPumpkinTopOffset(
      getRandomNumber((screenDimensions.height / 4) * 3 - pumpkinDimensions.height)
    );

    setScore(score + 1);
  };

  // Layout
  let headerText1;
  let headerText2;
  let playButtonText;

  if (gameState === 'initial') {
    headerText1 = 'Smash pumpkin to start';
    headerText2 = null;
    playButtonText = 'Play';
  } else if (gameState === 'gameInProgress') {
    headerText1 = `Score: ${score}`;
    headerText2 = `Time left: ${timeLeft}`;
    playButtonText = null;
  } else {
    headerText1 = 'Gave Over';
    headerText2 = `Score: ${score}`;
    playButtonText = 'Play Again';
  }

  return (
    <AppContainer>
      <View style={styles.container}>
        <Background />
        <View style={styles.header}>
          {headerText1 && <Text style={[styles.text, styles.headerText1]}>{headerText1}</Text>}
          {headerText2 && <Text style={[styles.text, styles.headerText2]}>{headerText2}</Text>}
        </View>
        <View style={styles.content}>
          {gameState === 'gameInProgress' && (
            <View style={{ marginLeft: pumpkinLeftOffset, marginTop: pumpkinTopOffset }}>
              <Pumpkin onPress={handlePumpkinPress} />
            </View>
          )}
          {playButtonText && <Button text={playButtonText} onPress={startGame} />}
        </View>
      </View>
    </AppContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(219, 81%, 12%, 1)',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    flex: 1,
  },
  content: {
    flex: 3,
  },
  text: {
    fontFamily: 'Margarine',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerText1: {
    fontSize: 40,
  },
  headerText2: {
    marginTop: 12,
    fontSize: 30,
  },
});
