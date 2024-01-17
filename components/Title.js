import { Text, View, StyleSheet } from "react-native";

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
        borderBottomWidth: 1,
        borderBottonmColor: "#ddb527",
        marginBottom: 16,
        padding: 16,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb527",
        textAlign: "center",
    },
});
