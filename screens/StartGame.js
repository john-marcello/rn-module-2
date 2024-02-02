// dependencies

import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

// components
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InputHint from '../components/ui/InputHint';
import ButtonPrimary from '../components/ui/ButtonPrimary';

// constants
import Colors from '../constants/colors';

// start game screen component
function StartGame({ onSelectNumber }) {
    
    // state for the entered number
    const [enteredNumber, setEnteredNumber] = useState('');
    
    // takes in the entered number and sets the state
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    // set chosen number and validate input when confirm is pressed
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        // validate input and alert the user if necessary
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
        // set the chosen number
        onSelectNumber(chosenNumber);
    }

    // reset the input when the reset button is pressed
    function resetInputHandler() {
        setEnteredNumber('');
    }

    console.log("Entered number: ", enteredNumber);

    // render the start game screen
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
