import { Container, Content } from "./styles";
import daniel from  "../../assets/daniel.pdf"
import  imgCurriculo from "../../assets/imgCurriculo.jpeg"
import { ContainerButton } from "../../components";
export function Curriculo(){
    return(
        <Container>
             <h1>Bem vindos(as) a tela do meu curriculo!</h1>
            <Content>
           
            <img src= {imgCurriculo}alt="imagem do curriculo" />
           <a target= "blank" href={daniel}>Visualizar curriculo</a>
           </Content>
            <ContainerButton/>
        </Container>
    )
}