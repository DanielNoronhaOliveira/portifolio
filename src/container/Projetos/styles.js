import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 height: 100vh;
 overflow:auto ;
 h1{
    color: #228B22;
    text-align: center;
 }
`
export const Content = styled.div`
  background-color: #000000;
  height: 100vh;
  margin: 20px;
  display: grid;
  grid-template-columns:  repeat(3, 1fr);
  gap: 10px;
  overflow: auto;
  
  @media(max-width:740px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Cronometro = styled.div`
background-color: #228B22;
max-width: 250px;
max-height: 250px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;

h2{
    color: #ffffff;  
    text-align: center;
}
 

 a{
    text-decoration: none;
    font-size:20px;
    display: flex;
    justify-content: center;
    color:#0000FF
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`

export const DevBurguer = styled.div`
 background-color: #228B22;
max-width: 250px;
max-height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;

h2{
    color: #ffffff;  
}
 p{
    color: #ffffff;
    
 }

 a{
    text-decoration: none;
    font-size:20px;
    color:#0000FF;
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`
export const DevMovies = styled.div`
 background-color: #228B22;
max-width: 250px;
max-height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;


h2{
    color: #ffffff;  
}
 p{
    color: #ffffff;
    
 }

 a{
    text-decoration: none;
    font-size:20px;
    color:#0000FF;
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`
export const Jokenpo = styled.div`
 background-color: #228B22;
max-width: 250px;
max-height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;

h2{
    color: #ffffff;  
}
 p{
    color: #ffffff;
    
 }

 a{
    text-decoration: none;
    font-size:20px;
    color:#0000FF;
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`
export const Conversor = styled.div`
 background-color: #228B22;
max-width: 250px;
max-height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;


h2{
    color: #ffffff;  
}
 p{
    color: #ffffff;
    
 }

 a{
    text-decoration: none;
    font-size:20px;
    color:#0000FF;
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`
export const Calculadora = styled.div`
 background-color: #228B22;
width: 250px;
height: 220px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 18px;
align-items: center;

h2{
    color: #ffffff;  
}
 p{
    color: #ffffff;
    
 }

 a{
    text-decoration: none;
    font-size:20px;
    color:#0000FF;
 }

 @media(max-width:740px) {
    width: 200px;
    height: 300px;
    a{
      font-size: 15px;
    }
 }
`


