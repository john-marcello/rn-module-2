import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.numberView}>
            <Text style={styles.numberText}>{children}</Text>
        </View>  
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
      numberView: {
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: Colors.accentLight,
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
            marginHorizontal: 24,
        },
        numberText: {
            color: Colors.accentLight,
            fontSize: 36,
            fontWeight: 'bold',
      }  
    })