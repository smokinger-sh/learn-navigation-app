// screens/SettingsScreen.js
import { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import { Colors } from "../styles/colors";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Header>Settings</Header>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});