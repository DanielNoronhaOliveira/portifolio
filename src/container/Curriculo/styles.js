import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 height: 100vh;

 h1{
    color: #228B22;
    text-align: center;
    padding: 20px;
 }

 
`
export const Content = styled.div`
 background-color: #000000;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 img{
   width: 600px;
 }

 a{
    background-color:#228B22;
    color: #ffffff;
    font-size: 20px;
    border-radius:20px;
    padding: 15px;
    margin-top: 30px;
    text-decoration: none;
 }
 a:hover{
    background-color:#32CD32 ;
 }

 @media (max-width: 652px){
    img{
        width: 300px;
    }
    a{
        padding: 10px;
    }
 }
`