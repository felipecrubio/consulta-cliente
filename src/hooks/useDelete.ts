import axios from "axios"

export function useDelete(id: string) {
  const url = `https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente(${id})`

  const headers = {
    'Access-Control-Allow-Origin': "https://cnctesteapl.azurewebsites.net/",
  }

  axios.delete(url, { headers })
    .then(response => console.log(response))

  return (
    console.log('deletado')
  )
}
