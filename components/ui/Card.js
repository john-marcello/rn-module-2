import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}>
        {children}
    </View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primaryDark,
        borderRadius: 8,
        elevation: 2, // android only
        shadowColor: '#ffffff', // ios only
        shadowOffset: { width: 0, height: 2 }, // ios only
        shadowRadius: 4, // ios only
        shadowOpacity: 0.1, // ios only
    },
});