import { Navbar } from "../components/Navbar";
import { useFetch } from "../hooks/useFetch"
import axios from "axios"

type Categoria = {
  Id: string;
  Nome: string;
}

export function Lista() {
  const { data: categorias, isFetching } = useFetch<Categoria[]>()

  const handleDelete = (id: string) => {
    const url = `https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente(${id})`

    const headers = {
      'Access-Control-Allow-Origin': "https://cnctesteapl.azurewebsites.net/",
    }

    axios.delete(url, { headers })
      .then(response => console.log(response))
  }

  return (
    <div>
      <Navbar />
      <div className="p-5 flex justify-center">
        <div className="container p-10 max-w-[700px] border border-zinc-300 rounded-2xl shadow-xl">
          <h2 className="text-3xl mb-4">Categoria Cliente</h2>
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
        </div>
      </div>
    </div>
  )
}
