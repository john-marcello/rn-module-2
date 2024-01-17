import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";

export default function App() {
    const [userNumber, setUserNumber] = useState();

    function selectedNumberHandler(selectedNumber) {
        setUserNumber(selectedNumber);
    }

    let screen = <StartGame onSelectNumber={selectedNumberHandler} />;

    if (userNumber) {
        screen = <PlayGame />;
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
