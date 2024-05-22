import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Instructions</Text>
      <Button
        title="Go to Instructions"
        onPress={() => navigation.navigate("Instructions")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InstructionsScreen" component={Instructions} />
        <Stack.Screen name="MainScreen" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
