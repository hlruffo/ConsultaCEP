import './App.css';
import { useState, useRef } from 'react';
import Erro from './Components/Erro';
import Pesquisa from './Components/Pesquisa';
import Resultado from './Components/Resultado';
import Carregando from './Components/Carregando';

function App() {
  const [nomeTela, setNomeTela] = useState("PESQUISA")
  const [resultado, setResultado] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const ticket = useRef(1)

  function goTo(nomeTela) {
    setNomeTela(nomeTela)
  }
  return (
    <>
      <div className="App">
        <header className="App-header">

          {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket}/> : null}
          {nomeTela === "RESULTADO" ? <Resultado goTo={goTo} result={resultado} /> : null}
          {nomeTela === "ERRO" ? <Erro goTo={goTo} errorMessage={errorMessage} /> : null}
          {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} ticket={ticket}/> : null}
        </header>
      </div>

    </>
  )
}

export default App;
