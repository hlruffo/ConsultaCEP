import './App.css';
import Erro from './Components/Erro';
import Pesquisa from './Components/Pesquisa';
import Resultado from './Components/Resultado';

function App() {
  return (
    <>
      <Resultado result={{
        "RUA": "Rua São Paulo",
        "CIDADE": "Maringá",
        "ESTADO": "PR"
      }} />


    </>
  )
}

export default App;
