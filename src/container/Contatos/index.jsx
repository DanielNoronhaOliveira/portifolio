import { ContainerButton } from "../../components";
import { Container, Content } from "./styles";


export function Contatos() {
    return (
        <Container>
            <h1>Meus contatos</h1>
            <Content>
                <p>Linkedin:
                    <a href="https://www.linkedin.com/in/daniel-noronha1/" target="blank">https://www.linkedin.com/in/daniel-noronha1/</a>
                </p>
                <p>Github:
                    <a href="https://github.com/DanielNoronhaOliveira" target="blank">https://github.com/DanielNoronhaOliveira</a>
                </p>
                <p>Instagram:
                    <a href="https://instagram.com/danielnoronhah15?igshid=OGQ5ZDc2ODk2ZA==" target="blank">https://instagram.com/danielnoronhah15?igshid=OGQ5ZDc2ODk2ZA==</a>
                <p>Email:
                    <a href="noronha.daniel22@gmail.com" target="blank">noronha.daniel22@gmail.com</a>
                </p>
                </p>
                <p>Whatsapp: (84)99130021:
                    <a href="https://wa.me/qr/ZN5ZO75RIUTCJ1">https://wa.me/qr/ZN5ZO75RIUTCJ1</a>
                </p>


                <ContainerButton />
            </Content>
        </Container>
    )
}