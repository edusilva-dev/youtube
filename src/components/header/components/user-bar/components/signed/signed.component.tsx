import { Tooltip } from '@components/tooltip'
import { NotificationIcon, SignedContainer, UserImage, VideoPlusIcon } from './signed.styles'
import { IconContainer } from '@components/icon-container'

export const Signed = () => {
  return (
    <SignedContainer>
      <Tooltip.Root>
        <IconContainer>
          <VideoPlusIcon size={26} />
        </IconContainer>

        <Tooltip.Content text="Criar" />
      </Tooltip.Root>

      <Tooltip.Root>
        <IconContainer>
          <NotificationIcon size={26} />
        </IconContainer>

        <Tooltip.Content text="Notificações" />
      </Tooltip.Root>

      <UserImage src="https://thispersondoesnotexist.com/" />
    </SignedContainer>
  )
}
