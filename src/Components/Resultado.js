function Resultado(props) {
    const result = props.result    
    const keys = Object.keys(result)
    const elements = keys.map(key => (
        <span key={key}><b>{key}:</b>{result[key]}</span>
    ))
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Resultados da Busca para o CEP 
                </p>
                {elements}
                {/* <span><b>Rua:{props.rua}</b></span>
                <span><b>Cidade:{props.rua}</b></span>
                <span><b>Estado:{props.rua}</b></span> */}
                <button>Nova consulta</button>
            </header>
        </div>
    );
}
export default Resultado