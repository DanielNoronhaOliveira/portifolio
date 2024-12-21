import { ContainerButton } from "../../components";
import { Container, Content, Cronometro, DevBurguer, DevMovies, Jokenpo, Conversor, Calculadora} from "./styles";


export function Projetos(){
    return(
      
        <Container>
             <h1>Bem vindos(a) aos meus projetos!</h1>
            <Content>
                <Cronometro>
               <h2>Cronômetro</h2>
               <p>Esse é um projeto de um cronômetro  funcional utilizando HTML para estruturar a interface, CSS para estilizar e JavaScript para implementar a lógica de contagem de tempo. No HTML, a página é estruturada com um título, um display centralizado para mostrar o tempo e três botões que controlam o cronômetro: iniciar, pausar e reiniciar.  No JavaScript, variáveis armazenam segundos, minutos e horas, e funções controlam a contagem. A função iniciar inicia a contagem e a atualiza a cada segundo, a função pausar interrompe o cronômetro, e a função reiniciar zera os valores e interrompe a contagem.</p>
               <a href=" https://danielnoronhaoliveira.github.io/cronometro/" target="blank">Clique aqui para ver o projeto</a>
               </Cronometro>

               <DevBurguer>
                 <h2>Dev Burguer</h2>
                 <p>Esse é um projeto de um sistema de uma hamburgueria funcional com servidor, para isso no front-end foi utilizado o VITE, utilizando o REACT, JAVASCRIPT entre outras bibliotecas. Para o back-end foi utilizado o NODEMON, SUCRASE e para o banco de dados foi utilizado o MONGOSE, além diiso , foi utilizado o CONTAINER DOCKER.</p>
                <a href="https://devburger-hamb.netlify.app/" target="blank">Clique aqui para ver o projeto</a>
               </DevBurguer>
               <DevMovies>
                <h2>Dev Movies</h2>
                <p>Este é o projeto de filmes e séries chamado Dev Movie, para isso foi utilizado o VITE e criados componentes que busca informações sobre filmes e séries e exibe uma interface com os detalhes de filme principal e uma lista de filmes populares em um slider, assim como para as séries. As tecnologias utilizadas incluem REACT para a construção da interface, REACT-ROUTER-DOM para navegação, e funções customizadas para obter imagens e dados de séries. </p>
                <a href="https://playfilmes.netlify.app" target="blank">Clique aqui para ver o projeto</a>
               </DevMovies>
               <Jokenpo>
                 <h2>Jokenpô</h2>
                 <p>Este é um projeto de um  jogo de pedra, papel e tesoura entre um humano e um robô O placar do jogo é exibido na tela atualizando os pontos do jogador e do robô O elemento HTML com a classe resultado exibe o resultado de cada jogada enquanto os elementos com os IDs humano e robo exibem os pontos acumulados por cada jogador  Ao escolher uma jogada o jogador chama a função escolhas que executa o jogo passando a escolha do jogador e a escolha aleatória do robô A escolha do robô é definida pela função escolhaRobo que seleciona um item aleatório da lista pedra papel e tesoura.</p>
                 <a href="https://danielnoronhaoliveira.github.io/jokenpo/" target="blank">Clique aqui para ver o projeto</a>
               </Jokenpo>
               <Conversor>
                <h2>Conversor de moedas</h2>
                <p>Esse é um projeto de um conversor de moedas, onde foi criado a função converterValor queé responsável por pegar o valor digitado pelo usuário, formatá-lo como moeda brasileira e realizar a conversão para a moeda selecionada utilizando taxas fixas para dólar, euro e libra. O valor convertido é formatado de acordo com a moeda de destino e exibido na tela.</p>
                <a href="https://danielnoronhaoliveira.github.io/conversor-de-moedas/" target="blank">Clique aqui para ver o projeto</a>
               </Conversor>
               <Calculadora>
                <h2>Calculadora</h2>
                <p>Esse código é uma calculadora simples implementada em HTML, CSS e JavaScript que utiliza uma interface com botões para permitir que o usuário insira números e operadores matemáticos. O HTML define a estrutura da página com um título, um campo de exibição de resultados e botões dispostos em uma tabela representando os números e as operações matemáticas. A interface possui botões para limpar tudo, apagar o último caractere, inserir números e operadores, e calcular os resultado.</p>
                <a href=" https://danielnoronhaoliveira.github.io/calculadora/" target="blank">Clique aqui para ver o projeto</a>
               </Calculadora>
               <ContainerButton/>
            </Content>
           
        </Container>
        
      
    )
}