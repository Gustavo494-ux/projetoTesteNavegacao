import React, {createContext, useState} from 'react';

const NavegacaoContext = createContext();

export const NavegacaoProvider = ({children}) => {
  const [params, setParams] = useState([]);

  function setParametros(stack, tela, novosParametros) {
    const novosParams = {...params};

    if (!novosParams[stack]) {
      novosParams[stack] = {};
    }

    if (!novosParams[stack][tela]) {
      novosParams[stack][tela] = {};
    }

    novosParams[stack][tela] = {
      ...novosParams[stack][tela],
      ...novosParametros,
    };

    setParams(novosParams);
  }

  const getParametros = (stack, tela) =>
    params[stack] && params[stack][tela] ? params[stack][tela] : {};

  return (
    <NavegacaoContext.Provider value={{setParametros, getParametros}}>
      {children}
    </NavegacaoContext.Provider>
  );
};

export default NavegacaoContext;
