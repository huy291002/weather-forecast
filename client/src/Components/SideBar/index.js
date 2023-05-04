import React from 'react';
import {Menu} from 'antd';
import {useNavigate} from "react-router-dom";
import {CloudOutlined, SettingOutlined  }  from '@ant-design/icons';
import "./sidebar.css"
function SideBar() {
    const navigate = useNavigate();
  return (
    <div className = "wrapper">
        <Menu className ="SideBar"
        onClick={(item) =>{
            navigate(item.key);
        }}
            items ={[
                {
                    label: "Weather",
                    key: "/weather",
                    icon: <CloudOutlined />
                },
                {
                    label: "Settings",
                    key: "/settings",
                    icon: <SettingOutlined />
                }
            ]}
        ></Menu> 
    </div>
  )
}

export default SideBar