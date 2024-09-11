import { useContext } from 'react';
import NavegacaoContext from '../context/navegacaoContext';


export const useNavegacao = () => useContext(NavegacaoContext);

export default useNavegacao;
