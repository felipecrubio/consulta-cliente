import { usePost } from "../hooks/usePost";

export function Post(nome: string, descricao: string) {
  usePost(nome, descricao);

  return (
    <div></div>
  )
}
