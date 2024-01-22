import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer.js";
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
        () => generateRandomBetween(
            minBoundary, 
            maxBoundary, 
            userNumber
            ),
        []
    );

    useMemo(() => console.log(userNumber),[]);
    
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
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <ButtonPrimary
                        onPress={nextGuessHandler.bind(this, "lower")}
                    >
                        -
                    </ButtonPrimary>
                    <ButtonPrimary
                        onPress={nextGuessHandler.bind(this, "higher")}
                    >
                        +
                    </ButtonPrimary>
                </View>
            </View>
        </View>
    );
}

export default PlayGame;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
});
