import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 10%;
  display: flex;
  .FotoPerfil{
    min-width: 40%;
    width: 30vw;
    height: 30vw;
    border-radius: 10%;
    background-color: #ddf;
    margin-right: 3%;
  }
  .infos{
    width: 60%;
  }
  .sobre{
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
  }
  .sobrePages{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 32%;
    padding: 12% 0px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px grey;
  }
  .projetos{
    background-color: #28f;
  }
  .lazer{
    background-color: #f42;
  }
  .planosFuturos{
    background-color: #4f2;
  }
`;
