import { StyleSheet, Text, View } from "react-native";
import Title from '../components/Title';

// play game screen
function PlayGame() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View><Text>Higher or Lower?</Text></View>
           
        </View>
        
    );
  }

  export default PlayGame;

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
    }
});