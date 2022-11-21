function Erro(props) {
  const goTo = props.goTo

  return (<>

    <p>{props.errorMessage}</p>
    <button onClick={() => goTo("PESQUISA")}>Nova consulta</button>
  </>

  );
}

export default Erro