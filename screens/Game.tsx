import { StyleSheet, Text, View } from "react-native";

function Game() {
  return (
    <View style={styles.screen}>
      <Text>Game</Text>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    flex: 1,
  },
});
