import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{roundNumber}. Computer Guess = {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        borderColor: Colors.primaryDark,
        borderWidth: 1,
        borderRadius: 36,
        padding: 16,
        marginVertical: 8,
        backgroundColor: Colors.accentLight,
        elevation: 4,
        shadowColor: Colors.primaryBlack,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    itemText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
    },
});