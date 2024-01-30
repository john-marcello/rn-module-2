import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOver() {
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
                <Text>Phone need X tries to guess the number Y</Text>
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
});