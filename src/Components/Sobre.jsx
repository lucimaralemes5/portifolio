import React from "react"
import { StyleAbout,Box2, Subtitulo, Sobrep, IconFigure, Iconimg } from "./AboutStyle"
import Instagram from "../assets/instagram-logo.svg"
import Linkedin from "../assets/linkedin-logo.svg"
import Github from "../assets/github-logo.svg"

function Sobre(){
    return(
        <StyleAbout>
            <Box2>
            <Subtitulo>Sobre Mim</Subtitulo>
            <Sobrep>Olá, sou Lucimara Lemes, natural de Várzea Grande, Mato Grosso. Atualmente, estou imersa no mundo do Desenvolvimento Web Frontend (aprimorei minhas habilidades no Vai na Web). Sou formada em Administração pela UNIC - Universidade de Cuiabá.Minha jornada acadêmica e profissional me proporcionou uma base sólida em Administração, enquanto meu curso intensificou meu foco em Desenvolvimento Web. Sinta-se à vontade para entrar em contato e explorar mais sobre meu percurso e aspirações.</Sobrep>
            <IconFigure>
                <a href="https://www.instagram.com/eulucimaralemes/" target="_blank">
                    <Iconimg src={Instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/lucimara-lemes-782619174/" target="_blank">
                    <Iconimg src={Linkedin} alt="Linkedin" />
                </a>
                <a href="https://github.com/lucimaralemes5" target="_blank">
                    <Iconimg src={Github} alt="GitHub" />
                </a>
            </IconFigure>
            </Box2>
            
        </StyleAbout>
    )
}
export default Sobre