function Carregando(props) {
  const goTo = props.goTo
  return (
    <>
      <p>
        Carregando
      </p>

      <button onClick={() => goTo("PESQUISA")}>Cancelar</button>
    </>
  );
}

export default Carregando