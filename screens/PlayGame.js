import { StyleSheet, Text, View } from "react-native";

function PlayGame() {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            
            <View><Text>Highr or Lower?</Text></View>
           
        </View>
        
    );
  }

  export default PlayGame;

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    },
});