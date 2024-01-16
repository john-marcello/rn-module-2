import { Pressable, StyleSheet, Text, View } from "react-native";

function ButtonPrimary({ children }) {
    function onPressHandler() {
        console.log("Button pressed");
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={onPressHandler}
                android_ripple={{ color: "#640233" }}
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
        overflow: "hidden",
    },

    buttonInnerContainer: {
        backgroundColor: "#72063c",
        padding: 16,
        elevation: 4, // android only
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
