import styled from "styled-components"

export const StyleAbout=styled.section`
color:white;
height:90vh;
display: flex;
align-items:center;
justify-content:center;

@media (max-width:800px){
    height:80vh;
}
`

export const Box2=styled.div`
width: 50vw;
height:40vh;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;

@media (max-width:800px){
    width:88vw;
    height:75vh;
}
`

export const Subtitulo=styled.h2`
margin-bottom: 10px;
font-size:1.5rem;

@media (max-width:800px) {
    font-size:2rem;
}

`
//#828282

export const Sobrep=styled.p`
color: #828282;
font-size:0.9rem;
margin-bottom:20px;

@media (max-width:800px) {
    height:86vw;
    font-size:1.1rem;
    text-align: center;
}
`

export const IconFigure=styled.figure`

width:30vw;
display:flex;
justify-content: space-around;

@media (max-width:800px) {
    width:50vw;
}
`

//fill: #b10c43;

export const Iconimg=styled.img`
width: 3vw;

@media (max-width:800px) {
    width:5vw;
}

`