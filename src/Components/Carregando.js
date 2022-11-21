function Carregando(props) {
  const goTo = props.goTo
  return (
    <>
      <p>
        Buscando o Cep informado.
      </p>
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" />

      <button onClick={() => goTo("PESQUISA")}>Cancelar</button>
    </>
  );
}

export default Carregando