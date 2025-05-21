import Title from "@/components/Title";
import { StyleSheet, Text, View } from "react-native";

function Game() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
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
