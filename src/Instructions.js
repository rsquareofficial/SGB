import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, StyleSheet, Text } from "react-native";
import * as Speech from "expo-speech";
import SecondScreen from "./App";

Speech.speak("Smart Guid Application Instructions:");
Speech.speak(
  "You are welcome to use our app. SGB is an app that helps blind individuals navigate their surroundings independently by using environment scanning and object detection technology. This software will vibrate your phone if it is 60% or more certain about the object."
);
Speech.speak("If you are ready please say: click second okay.");
Speech.speak("After 5 seconds please say: click only this time.");

// Define InstructionsScreen component
const InstructionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>
          Smart Guid Application Instructions:
        </Text>
        {"\n"}
        {"\n"}SGB is an application that helps blind individuals to identify
        objects and navigate their surroundings independently by using
        environment scanning and object detection technology. This software will
        vibrate your phone if it is 60% or more certain about the object.
        {"\n"} {"\n"}If you are ready please say: click second okay. {"\n"}
        {"\n"}After 5 seconds please say: click while using the app. {"\n"}
      </Text>
      <View style={styles.button}>
        <Button
          color="#17B8DA"
          title="Okay"
          onPress={() => navigation.navigate("Second")}
        />
      </View>
    </View>
  );
};

// Define Stack Navigator
const Stack = createStackNavigator();

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InstructionsScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="InstructionsScreen"
          component={InstructionsScreen}
        />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    textAlign: "justify",
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: "#17B8DA",
  },
});

export default App;
