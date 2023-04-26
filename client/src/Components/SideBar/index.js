import React from 'react';
import {Menu} from 'antd';
import {useNavigate} from "react-router-dom";
function SideBar() {
    const navigate = useNavigate();
  return (
    <div className = "SideBar">
        <Menu
        onClick={(item) =>{
            navigate(item.key);
        }}
            items ={[
                {
                    label: "Weather",
                    key: "/weather",
                },
                {
                    label: "Settings",
                    key: "/settings",
                }
            ]}
        ></Menu> 
    </div>
  )
}

export default SideBar