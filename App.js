// dependencies
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// screens
import StartGame from './screens/StartGame';
import PlayGame from './screens/PlayGame';
import GameOver from './screens/GameOver';

// constants
import { useFonts } from 'expo-font'
import Colors from './constants/colors';

export default function App() { 
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [roundsCount, setRoundsCount] = useState(0);

    // handling the selected number and game state from the StartGame screen
    function selectedNumberHandler(selectedNumber) {
        setUserNumber(selectedNumber);
        setGameIsOver(false);
    }

    // handling the game over event from the PlayGame screen
    function gameOverHandler(numberRounds) {
        setGameIsOver(true);
        setRoundsCount(numberRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setRoundsCount(0);
    }

    // conditional render screens based on game state
    
    // initialize the start game game screen component
    let screen = <StartGame onSelectNumber={selectedNumberHandler} />;
    
    // conditionally render the play screen component
    if (userNumber) {
        screen = <PlayGame userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    // conditionally render the game over screen component
    if (gameIsOver && userNumber) {
        screen = 
            <GameOver 
                onSelectNumber={selectedNumberHandler} 
                userNumber={userNumber}
                roundsNumber={roundsCount}
                onRestartGame={startNewGameHandler}
            />;
    }

    // preload custom fonts with expo and useFonts hook
    const [fontsLoaded] = 
        useFonts({
            'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    return (
        // Add component to handle gradient with expo
        // Add image background to the gradient
        // Add safe area view to the image background
        <LinearGradient
            colors={[Colors.primaryMedium, Colors.accentLight]}
            style={styles.rootScreen}
        >
            <ImageBackground
                accessibilityIgnoresInvertColors={true}
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.2,
    },
});
