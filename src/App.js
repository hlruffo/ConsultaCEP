import './App.css';
import { useState } from 'react';
import Erro from './Components/Erro';
import Pesquisa from './Components/Pesquisa';
import Resultado from './Components/Resultado';
import Carregando from './Components/Carregando';

function App() {
  const [nomeTela, setNomeTela] = useState("PESQUISA")
  const [resultado, setResultado] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  function goTo(nomeTela) {
    setNomeTela(nomeTela)
  }
  return (
    <>
      <div className="App">
        <header className="App-header">

          {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} /> : null}
          {nomeTela === "RESULTADO" ? <Resultado goTo={goTo} result={resultado} /> : null}
          {nomeTela === "ERRO" ? <Erro goTo={goTo} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> : null}
          {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} /> : null}
        </header>
      </div>

    </>
  )
}

export default App;
