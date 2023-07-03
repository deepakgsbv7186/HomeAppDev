import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Register} from '../screens';
import Counter from '../screens/Counter/Counter';
// import StepOne from '../screens/RegisterUser/StepOne';
// import StepTwo from '../screens/RegisterUser/StepTwo';
// import StepThree from '../screens/RegisterUser/StepThree';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="StepThree" component={StepThree} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
