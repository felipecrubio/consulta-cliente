import { useFetch } from './hooks/useFetch';


type Categoria = {
  nome: string;
}

function App() {
  const { data: categorias } = useFetch<Categoria[]>('https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente?$select=nome&$Filter=IdEntidadeSindical/Id%20eq%206a8be2a2-2636-43d4-b9c0-002a50888604')

  return (
    <ul>
      {categorias?.map(categoria => {
        return (
          <li key={categoria.nome}>
            <strong>{categoria.nome}</strong>
          </li>
        );
      })}
    </ul>
  );
}

export default App
