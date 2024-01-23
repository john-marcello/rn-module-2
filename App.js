import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";
import GameOver from "./screens/GameOver";

import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    function selectedNumberHandler(selectedNumber) {
        setUserNumber(selectedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGame onSelectNumber={selectedNumberHandler} />;

    if (userNumber) {
        screen = <PlayGame userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOver onSelectNumber={selectedNumberHandler} />;
    }

    return (
        // Add LinearGradient component to the root of the app with expo
        <LinearGradient
            colors={[Colors.primaryMedium, Colors.accentLight]}
            style={styles.rootScreen}
        >
            <ImageBackground
                accessibilityIgnoresInvertColors={true}
                source={require("./assets/images/background.png")}
                resizeMode="cover"
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
