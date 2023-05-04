import React from 'react';
import { Menu } from 'antd';
import './index.css';
import { Space, Table, Typography } from "antd";
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CropDinIcon from '@mui/icons-material/CropDin';
//import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function get_notice(humidity, light_intensity) {
  if (humidity > 0.7) {
    return "High chance of rain. Grab your umbrella before going outside!"
  }

  if (light_intensity > 40000) {
    return "High sun light intensity. Remember to wear a hat and suitable clothes to protect your skin from the sun!"
  }
}

function get_chance_of_rain(humidity) {
  if (humidity > 0.7) {
    return "High"
  } else if (humidity > 0.9) {
    return "Very High"
  } else {
    return "Low"
  }
}


function Weather() {
  const [data, setData] = useState([])
  const [todayTemp, setTodayTemp] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5000/data/latest")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data[0])
      })

      fetch("https://api.open-meteo.com/v1/forecast?latitude=10.74&longitude=106.65&hourly=temperature_2m")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTodayTemp(data.hourly.temperature_2m)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns = [
    {
      title: "Time",
      children: [
        {
          title: "6:00 AM",
          dataIndex: "sixam",
          align: "center",
        },
        {
          title: "9:00 AM",
          dataIndex: "nineam",
          align: "center",
        },
        {
          title: "12:00 PM",
          dataIndex: "twelveam",
          align: "center",
        },
        {
          title: "3:00 PM",
          dataIndex: "threepm",
          align: "center",
        },
        {
          title: "6:00 PM",
          dataIndex: "sixpm",
          align: "center",
        },
        {
          title: "9:00 PM",
          dataIndex: "ninepm",
          align: "center",
        },
      ],
    },
  ];

  const table_data = [{
      sixam: todayTemp[6] + '°C', 
      nineam: todayTemp[9] + '°C', 
      twelveam: todayTemp[12] + '°C', 
      threepm: todayTemp[15] + '°C', 
      sixpm: todayTemp[18] + '°C', 
      ninepm: todayTemp[21] + '°C',
    }]

  return (
    <>

      <div className='container text-center'>
        <div className='row ps-3 ' >
          HO CHI MINH CITY
        </div>
        <div className='row ps-5'>
          Chance of rain: {get_chance_of_rain(data.air_humidity)}
        </div>
        <div className='row ps-5'>
          NOTICE: {get_notice(data.air_humidity)}
        </div>
        <div className='row ps-4'>
          <Space size={10} direction="vertical">
            <Typography.Title level={4}>TODAY'S FORECAST</Typography.Title>
            <Table rowClassName={() => "rowClassName1"}
              bordered
              columns={columns}
              className='tableOfHour'
              dataSource={table_data}
              pagination={false}
            />
          </Space>
        </div>

        <div className='ps-6'>
          <Typography.Title level={4}>AIR CONDITION</Typography.Title>
          <div >
            <div className='left-temparature'>
              <ThermostatAutoIcon></ThermostatAutoIcon> Temperature: {data.temperature}°C
            </div>
            <div className='right-airhumidity'>
              <BackupOutlinedIcon></BackupOutlinedIcon> Air Humidity: {data.air_humidity}%

            </div>
          </div>
          <div>
            <div className='solid-humidity'>
              <CropDinIcon></CropDinIcon> Solid Humidity: {data.solid_humidity}%
            </div>
            <div className='lightintensity'>
              <WbSunnyIcon></WbSunnyIcon> Light Intensity: {data.light_intensity} LUX

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Weather