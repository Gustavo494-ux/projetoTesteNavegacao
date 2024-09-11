// src/screens/TelaA1.js
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import useNavegacao from '../../hooks/useNavegacao';

class TelaA1 extends Component {
  navigateToB1 = () => {
    const navegacaoContext = useNavegacao();
    navegacaoContext.setParametros('SubStackB', 'TelaBSub1', {
      message: 'Olá, StackB!',
    });

    this.props.navigation.navigate('StackB', {
      screen: 'TelaB1',
    });
  };

  render() {
    return (
      <View>
        <Text>Tela A1</Text>
        <Button title="Ir para TelaB1 na StackB" onPress={this.navigateToB1} />
      </View>
    );
  }
}

export default TelaA1;
