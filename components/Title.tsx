import { StyleSheet, Text } from "react-native";

function Title({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
