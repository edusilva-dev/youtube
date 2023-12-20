import { NotificationIcon, VideoPlusIcon } from "./signed.styles"


export const Signed = () => {
    // Criar
    // Notificações
    // Perfil -> buscar uma imagem aleatoria
    return (
      <>
        <VideoPlusIcon />
        <NotificationIcon />
        <img src="https://thispersondoesnotexist.com/" style={{"height": 100}}></img>
      </>
    )
}