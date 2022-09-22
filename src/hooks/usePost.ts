import { useEffect } from "react";
import axios from "axios";

export function usePost(nome: string, descricao: string) {
  const url = 'https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente'

  useEffect(() => {
    const data = {
      'Nome': nome,
      'Descricao': descricao,
      '_IdEntidadeSindical': '6a8be2a2-2636-43d4-b9c0-002a50888604'
     };

    const headers = {
      'Content-Type': 'application/json;odata=verbose'
    }

    axios.post(url, data, { headers })
      .then(response => console.log(response))
  })
}
