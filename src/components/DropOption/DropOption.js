import React from 'react';
import PropTypes from 'prop-types';

import {Dropdown, Button, Icon, Menu} from 'antd';

const DropOption = ({onMenuClick, menuOptions = [], buttonStyle, dropdownProps}) => {
    // 列出 menu 所有的 items
    const menuItems = menuOptions.map(
        (item) => {
            // console.log(`item `, item);
            // console.log(`item.key `, item.key);
            // console.log(`typeof item.key `, typeof(item.key));
            // if(item.key === "2" || item.name === "删除")
            if(item.name === "删除"){
                return(
                    <Menu.Item key={item.key} style={{color: "red", border: '1px solid red', borderRadius: '5px', textAlign: 'center'}}>
                        {item.name}
                    </Menu.Item>
                )
            }else{
                return(
                    <Menu.Item key={item.key} style={{color: "#000", border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center'}}>
                        {item.name}
                    </Menu.Item>
                )
            }
        }
    );
    // if delete & css red color
    // <li class="ant-dropdown-menu-item-selected ant-dropdown-menu-item" role="menuitem" aria-selected="true">删除</li>
    /*
        // const l = document.querySelectorAll('li.ant-dropdown-menu-item');
        const l = document.querySelectorAll('li.ant-dropdown-menu-item-selected.ant-dropdown-menu-item');
        // ant-dropdown-menu-item-selected ant-dropdown-menu-item
        for(i of l) {
            // console.log(i);
            let d = i.innerText;
            if(d === "删除"){
                console.log(i);
                console.log(`删除 `, d);
                i.style.background = "#0f0 !important";
                // change css attribute & global className
            }
        };
        // setInterval() / hover css
    */
    return (
        <Dropdown
            overlay={
                <Menu onClick={onMenuClick}>
                    {menuItems}
                </Menu>
            }
            trigger={['click','hover']}
            {...dropdownProps}
            >
            <Button
                style={
                    {
                        border: 'none', 
                        background: '#ccc',
                        ...buttonStyle
                    }
                }
                >
                <Icon 
                    style={{marginRight: 5}} 
                    type="bars"
                />
                <Icon type="down" />
            </Button>
        </Dropdown>
    );
};

DropOption.propTypes = {
    onMenuClick: PropTypes.func,
    menuOptions: PropTypes.array.isRequired,
    buttonStyle: PropTypes.object,
    dropdownProps: PropTypes.object
};

export default DropOption;
