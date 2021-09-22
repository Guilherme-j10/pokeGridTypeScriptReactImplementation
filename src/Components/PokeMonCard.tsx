import React, { useEffect, useState } from 'react';
import { IPokeResults } from '../Dtos/IPokeResults';
import axios from 'axios';

interface ITypePokemon {
  type: {
    name: string
  }
}

interface IGetPictureAndType {
  id: number,
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  },
  types: Array<ITypePokemon> // ITypePokemon[]
}

const PokeMonCard: React.FC<IPokeResults> = ({ name, url }) => {

  const [ PokeInfo, setPokeInfo ] = useState<IGetPictureAndType>();

  const getPictureAndType = async (): Promise<void> => {
    try {
      const response = await axios.get<IGetPictureAndType>(url);
      setPokeInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPictureAndType();
  }, [])

  return(
    <div className="CardPokemon">
      <div className="header">
        <h1>#{PokeInfo?.id}</h1>
        <h1>{name}</h1>
      </div>
      {(<img src={PokeInfo?.sprites.other['official-artwork'].front_default} />) || 'carregando'}
    </div>
  );
}

export default PokeMonCard;