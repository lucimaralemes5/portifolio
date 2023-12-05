import React from "react"
import styled from "styled-components"
import FormularioImg from "../assets/fact1.png"
import ContadorImg from "../assets/contador1.png"
import ImcImagem from "../assets/imc2.png"


export const Sessao=styled.section`
color:white;
display:flex;
height: 80vh;
align-items: center;
justify-content: space-around;
flex-direction: column;


@media (max-width:800px) {
    height:150vh;
}

`
export const DivProjeto=styled.div`
width:100vw;
height: 60vh;
text-align:center;
border-radius:20px;
display:flex;
justify-content:space-around;
align-items:center;
color: #828282;

@media (max-width:800px) {
    flex-direction: column;
    height:120vh;
    
}
`

export const ImgProjetos= styled.img`
width:20vw;
height:20vh;
border-top-right-radius:15px;
border-top-left-radius:15px;

@media (max-width:800px) {
    width:60vw;
}

`
export const Box3= styled.div`
height: 50vh;
width: 20.5vw;

@media (max-width:800px) {
    height:1vh;
    width:60vw;
}

`
export const TituloProjeto=styled.h2`
font-size:1.5rem;
width:25vw;
text-align:center;

@media (max-width:800px) {
    width:80vw;
    font-size: 2rem;
}
`

function Projetos(){
    return(
        <Sessao>
            
            <TituloProjeto>Meus Projetos</TituloProjeto>
        <DivProjeto>
            
            <Box3>
                <figure>
                    <a href="https://formulario-de-cadastro-snowy.vercel.app" target="_blank">
                        <ImgProjetos src={FormularioImg} alt="Facts Plant" />
                    </a>
                </figure>
                <h2>Formulário de Cadastro</h2>
                <h3>Descrição:</h3>
                <p>React,Hooks,styled components</p>
            </Box3>
            <Box3>
                <figure>
                    <a href="https://projeto-contador-kappa.vercel.app" target="_blank">
                        <ImgProjetos src={ContadorImg} alt="contador" />
                    </a>
                </figure>
                <h2>Contador</h2>
                <h3>Descrição:</h3>
                <p>React,Hooks,styled components</p>
            </Box3>
            <Box3>
                <figure>
                    <a href="https://calculadora-imc-blue-three.vercel.app" target="_blank">
                        <ImgProjetos src={ImcImagem} alt="calculadora-imc" />
                    </a>
                </figure>
                <h2>Calculadora de IMC</h2>
                <h3>Descrição:</h3>
                <p>React,Hooks,styled components</p>
            </Box3>
        </DivProjeto>

        </Sessao>
    )
}
export default Projetos