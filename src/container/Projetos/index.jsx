import { ContainerButton } from "../../components";
import { Container, Content, Cronometro, DevBurguer, DevMovies, Jokenpo, Conversor, Calculadora } from "./styles";

import AlarmIcon from '@mui/icons-material/Alarm';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MovieIcon from '@mui/icons-material/Movie';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalculateIcon from '@mui/icons-material/Calculate';

export function Projetos() {
  return (

    <Container>
      <h1>Bem vindos(a) aos meus projetos!</h1>
      <Content>
        <Cronometro>
          <h2>Cronômetro</h2>
          <AlarmIcon style={{fontSize: 90, color:'#ffffff'}}/>
          <a href=" https://danielnoronhaoliveira.github.io/cronometro/" target="blank"> ver o projeto</a>
        </Cronometro>

        <DevBurguer>
          <h2>Dev Burguer</h2>
          <FastfoodIcon style={{fontSize: 90, color:'#ffffff'}}/>
          <a href="https://devburger-hamb.netlify.app/" target="blank"> ver o projeto</a>
        </DevBurguer>
        <DevMovies>
          <h2>Dev Movies</h2>
          <MovieIcon style={{fontSize: 90, color:'#ffffff'}}/>
          <a href="https://playfilmes.netlify.app" target="blank"> ver o projeto</a>
        </DevMovies>
        <Jokenpo>
          <h2>Jokenpô</h2>
          <ContentCutIcon style={{fontSize: 90, color:'#ffffff'}}/>
          <a href="https://danielnoronhaoliveira.github.io/jokenpo/" target="blank"> ver o projeto</a>
        </Jokenpo>
        <Conversor>
          <h2>Conversor</h2>
          <MonetizationOnIcon style={{fontSize: 90, color:'#ffffff'}}/>
          <a href="https://danielnoronhaoliveira.github.io/conversor-de-moedas/" target="blank"> ver o projeto</a>
        </Conversor>
        <Calculadora>
          <h2>Calculadora</h2>
         <CalculateIcon  style={{fontSize: 90, color:'#ffffff'}}/>
          <a href=" https://danielnoronhaoliveira.github.io/calculadora/" target="blank"> ver o projeto</a>
        </Calculadora>
        <ContainerButton />
      </Content>

    </Container>


  )
}