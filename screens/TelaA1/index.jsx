// src/screens/TelaA1.js
import React from 'react';
import {Button, View, Text} from 'react-native';
import useNavegacao from '../../hooks/useNavegacao';
import {useNavigation} from '@react-navigation/native';

const TelaA1 = () => {
  const navigation = useNavigation();
  const navegacaoContext = useNavegacao();

  const navigateToB1 = () => {
    navegacaoContext.setParametros('SubStackB', 'TelaBSub1', {
      message: 'Olá, StackB!',
    });

    navigation.navigate('StackB', {
      screen: 'TelaBSub1',
      params: {},
    });
  };

  return (
    <View>
      <Text>Tela A1</Text>
      <Button title="Ir para TelaB1 na StackB" onPress={navigateToB1} />
    </View>
  );
};

export default TelaA1;
