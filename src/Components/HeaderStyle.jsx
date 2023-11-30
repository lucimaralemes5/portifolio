import styled from "styled-components"

export const StyleHeader= styled.header`
height:5rem;
display: flex;
align-items:center;
justify-content: center;
`

export const Navegacao= styled.ul`
display: flex;
justify-content: space-around;
list-style:none;
font-size:1.2rem;
width:35rem;
li:hover{
    background-color: #ddd; 
    transform: scale(110%);
  }

@media (max-width: 800px){
width:20rem;
font-size:1.5rem;

}

a{
    text-decoration:none;
    color: #F9F9F9;
}
`