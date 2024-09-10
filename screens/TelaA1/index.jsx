// src/screens/TelaA1.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class TelaA1 extends Component {
  navigateToB2 = () => {
    this.props.navigation.navigate('StackB', {
      screen: 'TelaB2',
      params: { message: 'Olá, StackB!' },
    });
  };

  render() {
    return (
      <View>
        <Text>Tela A1</Text>
        <Button
          title="Ir para TelaB2"
          onPress={this.navigateToB2}
        />
      </View>
    );
  }
}

export default TelaA1;
