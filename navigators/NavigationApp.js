// navigators/NavigationApp.js
import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import AppStackNavigator from "./AppStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

// Main navigation component that switches between Auth and App stacks based on authentication status
export default function NavigationApp() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? <AppStackNavigator /> : <AuthStackNavigator />;
}