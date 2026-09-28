import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/colors";
import { useRoute } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <Header>Product Detail</Header>
      <Text>Product: {params.product}</Text>
      <Text>ID: {params.id}</Text>
      <Text>Price: ${params.price}</Text>
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