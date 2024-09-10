// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA1 from './screens/TelaA1';
import TelaB2 from './screens/TelaB2';

const StackA = createStackNavigator();
const StackB = createStackNavigator();
const RootStack = createStackNavigator();

function StackAScreen() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="TelaA1" component={TelaA1} />
    </StackA.Navigator>
  );
}

function StackBScreen() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="TelaB2" component={TelaB2} />
    </StackB.Navigator>
  );
}

const App = ()  => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="StackA" component={StackAScreen} />
        <RootStack.Screen name="StackB" component={StackBScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;