import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 height: 100vh;
 overflow: hidden;

 h1{
    color: #228B22;
    text-align: center;
    padding: 20px;
 }
`

export const Content = styled.div`
 background-color: #000000;
 height: 100vh;
 margin: 20px;
 overflow: hidden;

 p{
    color: #ffffff;
    font-size: 30px;
 }
 a{
    color: #0000FF;
 }

 @media(max-width:536px){
    p{
        font-size: 20px;
    }
 }
`