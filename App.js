import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "red",
    textAlign: "center",
  },
});
