import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InputHint from '../components/ui/InputHint';
import ButtonPrimary from '../components/ui/ButtonPrimary';

import Colors from '../constants/colors';

// start game screen
function StartGame({ onSelectNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        onSelectNumber(chosenNumber);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    return (
        <View style={styles.screen}>
            <Title>Guess My Number</Title>
            <Card>
                <InputHint>Enter a number</InputHint>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary onPress={confirmInputHandler}>
                            Confirm
                        </ButtonPrimary>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary onPress={resetInputHandler}>
                            Reset
                        </ButtonPrimary>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGame;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
    numberInput: {
        height: 48,
        width: 64,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: Colors.accentLight,
        borderBottomWidth: 2,
        color: Colors.accentLight,
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
    },
});
