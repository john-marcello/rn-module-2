import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

function InputHint({ children, style }) {
    return <Text style={[styles.inputHint, style]}>{children}</Text>;
}

export default InputHint;

const styles = StyleSheet.create({
    inputHint: {
        color: Colors.accentLight,
        fontSize: 16,
    },
});