import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente'
})

export function useFetch<T = unknown>() {
  const url = '?$select=id,nome&$Filter=IdEntidadeSindical/Id%20eq%206a8be2a2-2636-43d4-b9c0-002a50888604'
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.value);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  return { data, isFetching };
}
