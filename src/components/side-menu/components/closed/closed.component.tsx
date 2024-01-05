import { Section } from '@components/side-menu/side-menu.styles'
import { MAIN_MENU_ITEMS } from '@constants/menu/main'
import { MenuItem } from '../menu-item'

export const Closed = () => {
  return (
    <>
      <Section>
        {MAIN_MENU_ITEMS.map((menuItem, index) => (
          <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
        ))}
      </Section>
    </>
  )
}
