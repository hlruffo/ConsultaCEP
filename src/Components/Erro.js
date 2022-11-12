function Erro(props) {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
             CEP não encontrado
          </p>      
          <p>{props.errorMessage}</p>
          <button>Nova consulta</button>
        </header>
      </div>
    );
  }

  export default Erro