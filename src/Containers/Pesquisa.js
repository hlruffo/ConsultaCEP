import { useState, useEffect } from "react";
import consultarCep from "cep-promise"
import CEPDados from "../Components/CEPDados";


function numbersOnly(str) {
  return str.replace(/[^\d]/g, "")  // exclui do input caracteres não numéricos
}

function Pesquisa(props) {
  const goTo = props.goTo
  const ticket = props.ticket
  const [cepNumber, setCepNumber] = useState("")
  const setResultado = props.setResultado
  const setErrorMessage = props.setErrorMessage
  const [cepFavorito, setCepFavorito] = useState("")
  const [cepDados, setCepDados] = useState({})

  useEffect(() => {
    const storedCep = localStorage.getItem("cepFavorito") || ""
    setCepFavorito(storedCep)
  }, [])

  //a inserção desse useEffect está afetando a persistencia do cep na memoria de local host.
  // correção feita com o if para o funcionamento correto
  /*  useEffect(() => {
     if (!!cepFavorito) {
       localStorage.setItem("cepFavorito", cepFavorito);
       consultarCep(cepFavorito)
         .then(resultado => setCepDados)
         .catch(err => setCepDados({ "ERRO": err.message })) 
     }
   }, [cepFavorito]) */

  useEffect(() => {
    if (!cepFavorito) {
      return;
    }
    localStorage.setItem("cepFavorito", cepFavorito);
    consultarCep(cepFavorito)
      .then((resultado) => setCepDados(resultado))
      .catch((err) => setCepDados({ ERRO: err.message }));
  }, [cepFavorito]);

  function handleFavorite() {
    localStorage.setItem("cepFavorito", cepNumber)
    setCepFavorito(cepNumber)
  }


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

    const errorMessage = err.message
    setErrorMessage(errorMessage)
    goTo("ERRO")
  }

  function handleSearch() {
    ticket.current++
    const currentTicket = ticket.current
    goTo("CARREGANDO")
    consultarCep(cepNumber)
      .then(result => currentTicket === ticket.current && handleSuccess(result))
      .catch(err => currentTicket === ticket.current && handleError(err))
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
      <button onClick={clear}> Apagar</button>
      <button onClick={handleSearch}>Consultar</button>
      <button onClick={handleFavorite}>Salvar Favorito</button>
      <br></br>
      <p>Favorito:{cepFavorito}</p>
      {console.log(cepDados)}
      <CEPDados  CEPDados={cepDados} />


    </>

  );
}
export default Pesquisa