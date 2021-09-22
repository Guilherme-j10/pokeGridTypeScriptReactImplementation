import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 15px;
  background-color: #111;

  > .CardPokemon {
    width: 100%;
    padding: 20px;
    height: 250px;
    background-color: #222;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    > .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      > h1 {
        color: #fff;
        font-weight: bold;
        font-size: .9em;
      }
    }
  }

`;