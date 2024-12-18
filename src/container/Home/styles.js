import styled from "styled-components";

export const Container = styled.div`
 background-color: #000000;
 min-height: 100vh;
 overflow: hidden;
`

export const Content = styled.div`
 background-color: #000000;
 width: 100vw;
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
align-items: center;
 
 overflow: hidden;
 
 h1{
    color:#228B22;
    font-size: 40px;
    
 }
 p{
    color: #ffffff;
    font-size: 22px;
    padding:25px;
   overflow: hidden;
  
 }

 img{
    width: 200px;
    border-radius:100%;
    margin-top:30px;
 }

 a{
   background-color: #228B22;
   color: #ffffff;
   width: 200px;
   border-radius:30px;
   text-align: center;
   padding: 15px;
   font-size: 25px;
   text-decoration: none;
   margin-bottom:30px;

   
 }
 a:hover{
      background-color: #32CD32;
   }

   @media (max-width:284px){
      a{
         width: 150px;
         font-size: 20px;
      }
   }
`