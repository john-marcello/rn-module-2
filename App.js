// import { StyleSheet } from 'react-native';
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";

export default function App() {
    return (
        // Add LinearGradient component to the root of the app with expo
        <LinearGradient
            colors={["#4e0329", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <StartGame />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
         
    },
});
