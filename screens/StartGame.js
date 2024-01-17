import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

// start game screen
function StartGame({ onSelectNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
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
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
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
        </View>
    );
}

export default StartGame;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#3b021f",
        borderRadius: 8,
        elevation: 2, // android only
        shadowColor: "#ffffff", // ios only
        shadowOffset: { width: 0, height: 2 }, // ios only
        shadowRadius: 4, // ios only
        shadowOpacity: 0.1, // ios only
    },
    numberInput: {
        height: 48,
        width: 64,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    buttonContainer: {
        flex: 1,
    },
});
