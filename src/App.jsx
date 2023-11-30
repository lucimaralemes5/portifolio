import React from "react"
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import Projetos from "./Components/Projetos"
import Sobre from "./Components/Sobre"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { GlobalStyle } from "./Global/Global"

function App () {
return (
  <section>
    <GlobalStyle/>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Inicio/>}/>
  <Route path="/sobre" element={<Sobre/>}/>
  <Route path="/projetos" element={<Projetos/>}/>
</Routes>
</BrowserRouter>

  </section>
)

}
export default App