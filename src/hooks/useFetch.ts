import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: 'https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api.get(url, options)
      .then(response => {
        setData(response.data.value);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  return { data, isFetching };
}
