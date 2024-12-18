import { Container, Content } from "./styles";
import daniel from '../../assets/daniel.jpg'

export function Home() {
    return (
        <Container>
            <Content>
                <img src={daniel} alt="imagem da home" />
                <h1>Sobre mim</h1>
                <p>Sou um desenvolvedor full stack com experiência e paixão por transformar ideias em soluções digitais funcionais e otimizadas.
                    
                    Minha base técnica inclui HTML, CSS e JavaScript, além de frameworks e bibliotecas modernas, como React e TypeScript, para criar 
                    
                    interfaces dinâmicas e interativas.
                    No back-end, trabalho com Node.js, oferecendo uma abordagem completa para desenvolvimento de aplicativos e sistemas escaláveis.
                     
                    Além disso, tenho experiência com controle de versão usando Git e GitHub, colaborando de maneira eficiente em equipes ágeis e 
                    projetos em evolução constante.
                    Sempre em busca de novas tecnologias e práticas de desenvolvimento, minha missão é unir funcionalidade e experiência do usuário, 
                    criando produtos que realmente fazem a diferença.</p>
                    
                    <a href="/saiba-mais">Saiba mais</a>
            </Content>
        </Container>
    )
}