import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Category, Home, Joke, Login, NewHome, Register } from "../screens";
import Counter from "../screens/Counter/Counter";
import COLOR from "../theme/COLOR";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome Native">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Welcome Native"
          component={MyTabs}
          options={{
            headerStyle: { backgroundColor: COLOR.pink },
            headerTintColor: COLOR.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={"NewHome"}
      screenOptions={{
        tabBarActiveTintColor: COLOR.white,
        tabBarInactiveTintColor: COLOR.gray_dark,
        tabBarAllowFontScaling: true,
        // tabStyle: { width: "auto", alignItems: "center" },
        tabBarLabelStyle: {
          fontSize: responsiveFontSize(1.5),
          fontWeight: 500,
          textTransform: "uppercase",
        },
        tabBarContentContainerStyle: {
          backgroundColor: COLOR.pink,
        },
        tabBarBounces: true,
        tabBarIndicatorStyle: { backgroundColor: COLOR.white },
      }}
    >
      <Tab.Screen
        name="NewHome"
        component={NewHome}
        options={{ tabBarLabel: "NewHome" }}
      />
      <Tab.Screen
        name="Joke"
        component={Joke}
        options={{ tabBarLabel: "Joke" }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{ tabBarLabel: "Category" }}
      />
    </Tab.Navigator>
  );
};
