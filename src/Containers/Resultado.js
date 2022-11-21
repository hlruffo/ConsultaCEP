import CEPDados from "../Components/CEPDados";

function Resultado(props) {
    const result = props.result
    const goTo = props.goTo
    /* 
    const keys = Object.keys(result)
    const elements = keys.map(key => (
        <span key={key}><b>{key}:</b>{result[key]}</span>
    )) */
    return (
        <>
            <p>
                Resultados da Busca para o CEP {result.cep}
            </p>
                <CEPDados CEPDados={result} />              
                
                
            <button onClick={() => goTo("PESQUISA")}>Nova consulta</button>
            
        </>)
   
}
export default Resultado