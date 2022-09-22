import { useDelete } from "../hooks/useDelete";
import { useFetch } from "../hooks/useFetch"

type Categoria = {
  Id: string;
  Nome: string;
}

export function List() {
  const url = '?$select=id,nome&$Filter=IdEntidadeSindical/Id%20eq%206a8be2a2-2636-43d4-b9c0-002a50888604'

  const { data: categorias, isFetching } = useFetch<Categoria[]>(url)

  return (
    <div className="p-5 flex justify-center">
      <div className="container p-10 max-w-[700px] border border-zinc-300 rounded-2xl shadow-xl">
        <h2 className="text-3xl mb-4">Categoria Clientes</h2>
        <ul>
          { isFetching && <p>Carregando...</p> }
          {categorias?.map(categoria => {
            return (
              <li key={categoria.Id} className="flex justify-between gap-5 p-2 border-b border-solid border-zinc-300">
                <p>{categoria.Nome}</p>
                <button onClick={() => useDelete(categoria.Id)}><i className="fa-regular fa-trash-can text-xs"></i></button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
