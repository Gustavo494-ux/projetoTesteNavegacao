// src/screens/TelaB1.js
import React from 'react';
import {Button, View, Text} from 'react-native';
import useNavegacao from '../../hooks/useNavegacao';

const TelaB1 = () => {
  const navegacaoContext = useNavegacao();

  const navigateToBSub1 = () => {
    // this.props.navigation.navigate('SubStackB', {
    //     screen: 'TelaBSub1',
    //     params: {},
    // });

    const parametros = navegacaoContext.getParametros('SubStackB', 'TelaBSub1');

    console.debug('!!parametros: ', parametros);
  };

  return (
    <View>
      <Text>Tela B1</Text>
      <Button
        title="Ir para TelaBSub1 na SubStackB"
        onPress={navigateToBSub1}
      />
    </View>
  );
};

export default TelaB1;
