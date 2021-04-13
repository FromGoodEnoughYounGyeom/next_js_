import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    const activeItem = "home"
    return (
        <Menu inverted>
        <Menu.Item
          name='Foundation'
          active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item              
          name='Lipstick'
          active={activeItem === 'messages'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Shadow'
          active={activeItem === 'friends'}
                                                                            
        />
      </Menu>

    )
}