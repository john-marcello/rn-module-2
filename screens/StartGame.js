import { StyleSheet, TextInput, View } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

function StartGame({}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <ButtonPrimary>Confirm</ButtonPrimary>
            <ButtonPrimary>Reset</ButtonPrimary>
        </View>
    );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, // android only
    shadowColor: '#000000', // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowRadius: 6, // ios only
    shadowOpacity: 0.25, // ios only
  },
});
