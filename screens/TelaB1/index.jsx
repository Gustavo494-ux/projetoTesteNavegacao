// src/screens/TelaB1.js
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class TelaB1 extends Component.props {
    navigateToBSub1 = () => {
    this.props.navigation.navigate('SubStackB', {
      screen: 'TelaBSub1',
      params: {message: `TelaB1, parametros TelaA1: ${this.props.params}`},
    });
  };

  render() {
    console.debug('!!TelaB1: ', this.props.params);
    return (
      <View>
        <Text>Tela B1</Text>
        <Button
          title="Ir para TelaBSub1 na SubStackB"
          onPress={this.navigateToBSub1}
        />
      </View>
    );
  }
}

export default TelaB1;
