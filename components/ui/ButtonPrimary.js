import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';


function ButtonPrimary({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primarySemi }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default ButtonPrimary;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 32,
        margin: 8,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primaryLight,
        padding: 8,

        elevation: 4, // android only
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});
