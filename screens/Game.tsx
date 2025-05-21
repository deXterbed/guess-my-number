import { StyleSheet, Text, View } from "react-native";

function Game() {
  return (
    <View style={styles.rootScreen}>
      <Text>Game</Text>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  rootScreen: {
    marginTop: 100,
    flex: 1,
  },
});
