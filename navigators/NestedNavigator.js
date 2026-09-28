// navigators/NestedNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

// Nested navigator that includes the bottom tabs and product detail screens
export default function NestedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.PRIMARY },
        headerTintColor: Colors.WHITE,
      }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: `Product Detail: ${route.params.product}`,
        })}
      />
    </Stack.Navigator>
  );
}
