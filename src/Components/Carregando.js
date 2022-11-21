function Carregando(props) {
  const goTo = props.goTo
  const ticket = props.ticket

  function handleCancel() {
    ticket.current++

    goTo("PESQUISA")
  }
  return (
    <>
      <p>
        Buscando o Cep informado.
      </p>
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />

      <button onClick={handleCancel}>Cancelar</button>
    </>
  );
}

export default Carregando