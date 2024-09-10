// src/screens/TelaB2.js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TelaB2 extends Component {
  render() {
    const { message } = this.props.route.params;

    return (
      <View>
        <Text>Tela B2</Text>
        <Text>Mensagem recebida: {message}</Text>
      </View>
    );
  }
}

export default TelaB2;
