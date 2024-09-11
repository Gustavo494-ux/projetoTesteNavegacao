import React, { createContext, useEffect } from 'react';

const NavegacaoContext = createContext();

export const NavegacaoProvider = ({ children }) => {
    const [params, setParams] = useState([]);

	useEffect(() => {
		async function verificarLogin() {
			const token = await Auth.getToken();
			setLogado(!!token);
		}
		verificarLogin();
	}, []);


    function setParametros(stack, tela, novosParametros) {
        // Cria uma cópia do estado atual
        const novosParams = { ...params };
    
        // Verifica se a stack existe; se não, cria uma nova
        if (!novosParams[stack]) {
            novosParams[stack] = {};
        }
    
        // Verifica se a tela existe dentro da stack; se não, cria uma nova
        if (!novosParams[stack][tela]) {
            novosParams[stack][tela] = {};
        }
    
        // Atualiza os parâmetros da tela
        novosParams[stack][tela] = {
            ...novosParams[stack][tela],
            ...novosParametros
        };
    
        // Atualiza o estado com os novos parâmetros
        setParams(novosParams);
    }
    
    function getParametros(stack, tela) {
        if (params[stack] && params[stack][tela]) {
            return params[stack][tela];
        }
        return null; // Retorna null se a stack ou a tela não for encontrada
    }
    

	return (
		<NavegacaoContext.Provider value={{ setParametros, getParametros }}>
			{children}
		</NavegacaoContext.Provider>
	);
};

export default NavegacaoContext;
