// screens/HomeScreen.js
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import { Colors } from "../styles/colors";

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  useFocusEffect(
    useCallback(() => {
        setSearchQuery("");
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header>Home</Header>
      <Text style={styles.welcomeText}>Welcome to the Home screen!</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
           <Button
              title="Apple Watch @ $399"
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  product: "Apple Watch",
                  id: 125,
                  price: 399,
                })
              }
            />
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
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "80%",
  },
});