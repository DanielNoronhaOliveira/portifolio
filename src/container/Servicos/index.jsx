import { ContainerButton } from "../../components";
import { Container, Content } from "./styles";


export function Servicos(){
    return(
        <Container>
            <h1>Conheça meus serviços</h1>
            <Content>
               <h2>1.Desenvolvimento de Websites Responsivos</h2>
                    <li>Serviço: Criação de websites personalizados, modernos e responsivos, que se adaptam a qualquer dispositivo (desktop, tablet, e smartphone).</li>
                    <li>Tecnologias: HTML5, CSS3, JavaScript, React, TypeScript.</li>
                    <li>Benefícios: Um site responsivo melhora a experiência do usuário e aumenta a chance de conversão em dispositivos móveis.</li>
                    <li>Exemplo: Desenvolvimento de portfólios online, landing pages ou sites institucionais.</li>
                
                <h2>2.Desenvolvimento de Aplicações Web</h2>
                      <li>Serviço: Criação de aplicações web completas que atendem a necessidades específicas, como sistemas de gerenciamento e plataformas personalizadas.</li>
                      <li>Tecnologias: React para o frontend e Node.js para o backend.</li>
                      <li>Benefícios: Sistemas robustos e escaláveis, com integração de funcionalidades avançadas como dashboards administrativos.</li>
                      
                <h2>3.Integração de APIs e Serviços Externos</h2>
                      <li>Serviço: Conexão de sistemas a APIs externas, como serviços de pagamento (Stripe, PayPal).</li> 
                      <li>Tecnologias: Axios.</li>
                      <li>Benefícios: Agilidade no acesso a dados e maior funcionalidade para os usuários.</li>
                      <li>Exemplo: Implementação de sistema de pagamento online para uma loja virtual.</li>

                <h2>4.Integração com Banco de Dados</h2>
                      <li>Serviço: Configuração, gerenciamento e otimização de bancos de dados relacionais ou não relacionais.</li>
                      <li>Tecnologias: MongoDB, MySQL, PostgreSQL.</li>
                      <li>Benefícios: Armazenamento seguro e eficiente de dados.</li>
                      <li>Exemplo: Criação de um banco de dados para controle de estoque.</li>

                <h2>5.Configuração e Deploy</h2>
                      <li>Serviço: Hospedagem de aplicações e sites em plataformas de deploy.</li>
                      <li>Tecnologias: Netlify.</li>
                      <li>Benefícios: Entrega rápida e confiável de aplicações.</li>
                      
                <ContainerButton/>
            </Content>
        </Container>
    )
}