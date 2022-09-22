export function Categorias(categorias, isFetching) {
  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {categorias?.map(categoria => {
        return (
          <li key={categoria.Id} className="flex justify-between gap-5 p-2 border-b border-solid border-zinc-300">
            <p>{categoria.Nome}</p>
            <button
              onClick={() => {
                  handleDelete(categoria.Id)
                }}>
                <i className="fa-regular fa-trash-can text-xs"></i>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
