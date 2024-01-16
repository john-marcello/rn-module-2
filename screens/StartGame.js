import { StyleSheet, TextInput, View, ViewBase } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

// start game screen
function StartGame({}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary>Confirm</ButtonPrimary>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary>Reset</ButtonPrimary>
                </View>
            </View>
        </View>
    );
}

export default StartGame;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 2, // android only
        shadowColor: '#ffffff', // ios only
        shadowOffset: { width: 0, height: 2 }, // ios only
        shadowRadius: 4, // ios only
        shadowOpacity: 0.1, // ios only
    },
    numberInput: {
        height: 48,
        width: 64,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
    }
});
