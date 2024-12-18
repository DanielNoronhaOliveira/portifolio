import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 height: 100vh;
`

export const Content = styled.div`
 background-color: #000000;
 height: 100vh;
 padding: 20px;

 h1{
   color:#228B22;
   text-align: center;
   font-size: 40px;
 }

 p{
    color: #ffffff;
    font-size:28px;
 }

 @media(max-width: 520px){
  p{
    font-size: 20px;
  }
 }
`