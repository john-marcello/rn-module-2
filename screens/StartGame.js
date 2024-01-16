import { TextInput, View } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

function StartGame({}) {
    return (
        <View>
            <TextInput />
            <ButtonPrimary>Confirm</ButtonPrimary>
            <ButtonPrimary>Reset</ButtonPrimary>
        </View>
    );
}

export default StartGame;
