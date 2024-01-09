import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import styled from 'styled-components'

export const SignedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const VideoPlusIcon = styled(BiVideoPlus)``

export const NotificationIcon = styled(IoIosNotificationsOutline)``

export const UserImage = styled.img`
  width: 35px;
  height: 35px;

  margin-left: 8px;

  border-radius: 100%;
`
