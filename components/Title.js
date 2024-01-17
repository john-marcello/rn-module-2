import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function Title({ children }) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleText}>Opponent's Guess</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    titleView: {
        borderWidth: 1,
        borderColor: Colors.accentLight,
        marginBottom: 16,
        padding: 16,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accentLight,
        textAlign: 'center',
    },
});
