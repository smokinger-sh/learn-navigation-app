// navigators/AppStackNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();
// App stack navigator for the main application screens
export default function AppStackNavigator() {
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