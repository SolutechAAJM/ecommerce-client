import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './styles/SidebarC.css'; 

const SidebarC = ({ isOpen = false, title = '', items = [] }) => {
    return (
        <Sidebar className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <Menu>
                {items.map((item, index) => (
                    item.subitems ? (
                        <SubMenu key={index} label={item.name}>
                            {item.subitems.map((subitem, subIndex) => (
                                <MenuItem key={subIndex} onClick={() => window.location.href = subitem.url}>
                                    {subitem.name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    ) : (
                        <MenuItem key={index} onClick={() => window.location.href = item.url}>
                            {item.name}
                        </MenuItem>
                    )
                ))}
            </Menu>
        </Sidebar>
    );
};

export default SidebarC;
