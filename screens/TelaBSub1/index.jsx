// src/screens/TelaBSub1.js
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import useNavegacao from '../../hooks/useNavegacao';

class TelaBSub1 extends Component {
  render() {
    const {message} = this.props.route.params;

    receberParametros = () => {
      const navegacaoContext = useNavegacao();
      navegacaoContext.setParametros('SubStackB', 'TelaBSub1', {
        message: 'Olá, StackB!',
      });
  
   
    };




    this.receberParametros();

    return (
      
      <View>
        <Text>Tela BSub1</Text>
        <Text>Mensagem recebida: {message}</Text>
      </View>
    );
  }
}

export default TelaBSub1;
