import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer.js";

import Card from "../components/ui/Card.js";
import Title from "../components/ui/Title";
import InputHint from "../components/ui/InputHint.js";
import ButtonPrimary from "../components/ui/ButtonPrimary.js";

function generateRandomBetween(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

// play game screen
function PlayGame({ userNumber, onGameOver }) {
    const initialGuess = useMemo(
        () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
        []
    );

    useMemo(() => console.log(userNumber), []);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "higher" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know this is wrong...", [
                {
                    text: "Sorry!",
                    style: "cancel",
                },
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InputHint style={styles.hintText}>Higher or Lower?</InputHint>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name='md-remove' />
                        </ButtonPrimary>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary
                            onPress={nextGuessHandler.bind(this, "higher")}
                        >
                            <Ionicons name='md-add' />
                        </ButtonPrimary>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default PlayGame;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
    },
    hintText: {
        marginBottom: 8,
        
    },
});
