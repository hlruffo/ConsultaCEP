function Resultado(props) {
    const goTo = props.goTo
    const result = props.result
    const keys = Object.keys(result)
    const elements = keys.map(key => (
        <span key={key}><b>{key}:</b>{result[key]}</span>
    ))
    return (
        <>
            <p>
                Resultados da Busca para o CEP {result.cep}
            </p>
            {elements}
            {/* <span><b>Rua:{props.rua}</b></span>
                <span><b>Cidade:{props.rua}</b></span>
                <span><b>Estado:{props.rua}</b></span> */}
            <button onClick={() => goTo("PESQUISA")}>Nova consulta</button>
        </>
    );
}
export default Resultado