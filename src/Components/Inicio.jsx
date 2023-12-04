import React from "react"
import styled from "styled-components"
import Imagem from "../assets/perfil.png"
import PdfCv from "../CV-lucimara.pdf"

export const Container = styled.section `
height: 80vh;
display:flex;
justify-content:center;
align-items:center;

@media (max-width:800px){
flex-direction: column;
height:80vh;
}
`
export const Box1=styled.div`
width:30rem;
height:15rem;

@media (max-width:800px){
  width: 80vw;
  text-align:center;
  height:50vhvh;
  
}

`

// #021b2b ; #02031a; #b10c43; #ff0841 = paleta de cores

export const Titulo=styled.h1`
color:#F9F9F9;
font-size:2rem;
height:3.5rem;

@media (max-width:800px){
  font-size: 2rem;
}
`
export const BlocoFrase= styled.p`
color: #828282;
height:3.5rem;
font-size:1rem;

@media (max-width:800px){
  height:3rem;
  margin-top:3rem;
}
`
export const BtnCv= styled.button`
background-color: #b10c43;
border: 1px solid #333;
border-radius:0.5rem;
color: #171717;
width:10rem;
height:2.5rem;
margin-right:0.5rem;
cursor:pointer;

&:hover {
    background-color: #ff0841 ;
  }

  @media (max-width:800px){
    width:5rem;
  }
`
export const BtnContato= styled(BtnCv)`
background-color: #02031a;
color: #F9F9F9;

@media (max-width:800px){
  width:5rem;
}
`
export const Img= styled.img`
width:9rem;
height:15.3rem;
border-radius: 0.5rem;
border: solid 2px #02031a;

@media (max-width:800px){
  width:11rem;
  height:16rem;
}
`


function Inicio () {
   


    return(
        <Container>

        <Box1>
        <Titulo>Olá, eu sou a Lucimara!</Titulo>
        <BlocoFrase>Desenvolvedora Front-End </BlocoFrase>

        <a href={PdfCv} download="curriculo-lucimara" target="_blank" rel="noreferrer">
        <BtnCv>Download CV</BtnCv> 
        </a>
       
       <a href="https://web.whatsapp.com/send?phone=5565981557834" target="_blank">
       <BtnContato>Entrar em contato</BtnContato> 
       </a>
        
        
         </Box1>
       
         <figure>
         <Img src={Imagem} alt="foto-de-perfil" />  
         </figure>
        </Container>
    )
}
export default Inicio