// src/App.js
import React from 'react';
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA1 from './screens/TelaA1';

import TelaBSub1 from './screens/TelaBSub1';
import TelaB1 from './screens/TelaB1';
import { NavegacaoProvider } from './context/navegacaoContext';

const StackA = createStackNavigator();
const StackB = createStackNavigator();
const SubStackB = createStackNavigator();
const RootStack = createStackNavigator();

function StackAScreen() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="TelaA1" component={TelaA1} />
    </StackA.Navigator>
  );
}

function SubStackBScreen() {
  return (
    <SubStackB.Navigator>
      <SubStackB.Screen name="TelaBSub1" component={TelaBSub1} />
    </SubStackB.Navigator>
  );
}

function StackBScreen() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="TelaB1" component={TelaB1} />
      <StackB.Screen name="SubStackB" component={SubStackBScreen} />
    </StackB.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoProvider>
      <RootStack.Navigator>
        <RootStack.Screen name="StackA" component={StackAScreen} />
        <RootStack.Screen name="StackB" component={StackBScreen} />
      </RootStack.Navigator>
      </NavegacaoProvider>
    </NavigationContainer>
  );
}
