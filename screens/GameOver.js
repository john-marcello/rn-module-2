// dependencies
import { Image, StyleSheet, Text, View } from 'react-native';

// components
import Title from '../components/ui/Title';
import ButtonPrimary from '../components/ui/ButtonPrimary';

// constants
import Colors from '../constants/colors';

// game over component
function GameOver() {
    
    // render the game over screen
    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/success.png')}
                    styles={styles.image}
                    // style={{width: 400, height: 400}}
                />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.accentText}>X</Text> tries to
                    guess the number <Text style={styles.accentText}>Y</Text>
                </Text>
                <ButtonPrimary>Start Over</ButtonPrimary>
            </View>
        </View>
    );
}

export default GameOver;

styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primaryDark,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 32,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    accentText: {
        fontFamily: 'OpenSans-Bold',
        color: Colors.primaryDark,
    },
});
