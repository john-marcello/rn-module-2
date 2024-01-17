import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";

export default function App() {
    const  [userNumber, setUserNumber] = useState();

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
            colors={["#4e0329", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                accessibilityIgnoresInvertColors={true}
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                {screen}
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
    } 

});
