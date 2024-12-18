import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function ContainerButton(){
    const navigate = useNavigate()
    return(
        <Container>
            <button onClick={() => navigate("/home")}>Voltar para a tela principal</button>
        </Container>
    )
}