import React from "react";

//show submenu function
const SubMenu = (props) => {
    return props.categories.map((item, index) => <li key={index}>{item}</li>)
}

export default SubMenu;