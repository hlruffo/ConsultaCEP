import { useState } from "react";
import consultarCep from "cep-promise"


function numbersOnly(str) {
  return str.replace(/[^\d]/g, "")  // exclui do input caracteres não numéricos
}


function Pesquisa(props) {
  const goTo = props.goTo
  const [cepNumber, setCepNumber] = useState("")
  const setResultado = props.setResultado
  const setErrorMessage = props.setErrorMessage

  function handleSuccess(dadosCep) {
    const resultado = {
      "Estado": dadosCep.state,
      "Cidade": dadosCep.city,
      "Bairro": dadosCep.neighborhood,
      "Logradouro": dadosCep.street,
    }
    setResultado(resultado)
    goTo("RESULTADO")
  }

  function handleError(err) {
    //const errorMessage = err.message
    //console.log(errorMessage)
    setErrorMessage(err.message)
  }

  function handleSearch() {
    consultarCep(cepNumber)
      .then(handleSuccess)
      .catch(handleError)
  }


  function handleChange(event) {
    const value = event.target.value
    setCepNumber(numbersOnly(value))
  }

  function clear() {
    setCepNumber("")
  }

  return (
    <>
      <p>Qual CEP você deseja consultar?</p>
      <input onChange={handleChange} value={numbersOnly(cepNumber)} />
      <button onClick={clear}> CLEAR</button>
      <button onClick={handleSearch}>Consultar</button>
    </>

  );
}
export default Pesquisa