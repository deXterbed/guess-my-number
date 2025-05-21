import Game from "@/screens/Game";
import StartGame from "@/screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
