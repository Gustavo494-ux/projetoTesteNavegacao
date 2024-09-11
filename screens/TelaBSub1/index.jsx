// src/screens/TelaBSub1.js
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import useNavegacao from '../../hooks/useNavegacao';

const TelaBSub1 = () => {
  const [Mensagem, setMensagem] = useState('Nenhum parametro definido');
  const navegacaoContext = useNavegacao();

  const receberParametros = () => {
    const parametros = navegacaoContext.getParametros('SubStackB',
         'TelaBSub1');
    setMensagem(parametros?.message);
    console.debug('parametros', parametros);
  };

  useEffect(() => {
    receberParametros();
  }, []);

  return (
    <View>
      <Text>Tela BSub1</Text>
      <Text>Mensagem recebida: {Mensagem}</Text>
    </View>
  );
};

export default TelaBSub1;
