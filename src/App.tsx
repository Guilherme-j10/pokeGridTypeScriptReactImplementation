import React, { useEffect, useState } from 'react';
import GlobalStyle from './styleGlobal';
import * as Components from './styleAplication';
import axios from 'axios';
import { IPokeApiReturn } from './Dtos/IPokeApiReturn';
import PokeMonCard from './Components/PokeMonCard';

function App() {

  const [ PokeMonsList, setPokeMonsList ] = useState<IPokeApiReturn>();

  const getPokemonsPreSets = async (): Promise<void> => {
    try { 
      const response = await axios.get<IPokeApiReturn>('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0');
      setPokeMonsList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemonsPreSets();
  }, [])

  return (
    <>
      <GlobalStyle />
      <Components.ContainerMain>
        {PokeMonsList?.results.map((dados, index) => (
          <PokeMonCard key={index} name={dados.name} url={dados.url} />
        ))}
      </Components.ContainerMain>
    </>
  );
}

export default App;
