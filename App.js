// import { StyleSheet } from 'react-native';
import { StyleSheet, View } from 'react-native';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    <View style={styles.rootScreen}>
        <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#ddb52f',
    },
});