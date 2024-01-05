import { MAIN_MENU_ITEMS } from '@constants/menu/main'
import { MenuItem } from '../menu-item'
import { ANONYMOUS_MENU_ITEMS } from '@constants/menu/anonymous'
import { Section } from './opened.style'

export const Closed = () => {
  return (
    <Section>
      {MAIN_MENU_ITEMS.map((menuItem, index) => (
        <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
      ))}

      {ANONYMOUS_MENU_ITEMS.map((menuItem, index) => (
        <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
      ))}
    </Section>
  )
}
