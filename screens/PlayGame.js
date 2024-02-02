// dependencies
import { useEffect, useMemo, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// components
import NumberContainer from '../components/game/NumberContainer.js';
import Card from '../components/ui/Card.js';
import Title from '../components/ui/Title';
import InputHint from '../components/ui/InputHint.js';
import ButtonPrimary from '../components/ui/ButtonPrimary.js';

// generate random number
function generateRandomBetween(min, max, exclude) {
    let randNum;
    do {
        randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randNum === exclude);

    return randNum;
}

let minBoundary = 1;
let maxBoundary = 100;

// play game component
function PlayGame({ userNumber, onGameOver }) {
    // why do this?
    const initialGuess = useMemo(
        () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
        []
    );
    useMemo(() => console.log(userNumber), []);

    // state for the current guess
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    // check if the game is over else continue
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    // handle the next guess and set the new boundary
    function nextGuessHandler(direction) {
        // validate the user's is within the correct range
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('Don\'t lie!', 'You know this is wrong...', [
                {
                    text: 'Sorry!',
                    style: 'cancel',
                },
            ]);
            // console.log('Invalid input');
            return;
            
        }

        // set the new boundary and generate a new random number
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        // console.log(minBoundary, maxBoundary);

        // generate the new random number
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        // console.log(newRandomNumber);

        // set the new guess
        setCurrentGuess(newRandomNumber);
    }

    // render the play game screen
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InputHint style={styles.hintText}>Higher or Lower?</InputHint>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary
                            onPress={nextGuessHandler.bind(this, 'lower')}
                        >
                            <Ionicons name='md-remove' />
                        </ButtonPrimary>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary
                            onPress={nextGuessHandler.bind(this, 'higher')}
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
