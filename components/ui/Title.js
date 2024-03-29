import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    titleView: {
        borderWidth: 1,
        borderColor: Colors.primaryWhite,
        marginBottom: 16,
        padding: 16,
        width: '100%',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryWhite,
        textAlign: 'center',
    },
});
