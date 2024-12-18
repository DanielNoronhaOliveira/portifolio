import styled from "styled-components";

export const Container = styled.div`
  background-color:#228B22;
  display: flex;
  gap: 200px;
  padding:10px 10px 10px 30px;
 
  min-width: 100vw;
  overflow: hidden;

  a{
    font-size: 30px;
    text-decoration:none;
    color: #ffffff;
    overflow: hidden;
  }

  @media (max-width:798px){
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
   
   
    a{
        font-size: 20px;
       
    }
  }
`