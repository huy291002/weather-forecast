import React from 'react';

import './index.css'
import { Space, Table, Typography } from "antd";

//import Table from "react-bootstrap/Table";
function Weather() {
  const columns = [
    {
      title: "Time",
      children: [
        {
          title: "6:00 AM",
          dataIndex: "firsthours",
        },
        {
          title: "9:00 AM",
          dataIndex: "nineam",
        },
        {
          title: "12:00 PM",
          dataIndex: "tweleveam",
        },
        {
          title: "3:00 PM",
          dataIndex: "threepm",
        },
        {
          title: "6:00 PM",
          dataIndex: "sixpm",
        },
        {
          title: "9:00 PM",
          dataIndex: "ninepm",
        },
      ],
    },
  ];
  
  return (
    <>

      <div className='container text-center'>
        <div className='row ps-3 ' >
          HO CHI MINH CITY
        </div>
        <div className='row ps-5'>
          Chance of rain:
        </div>
        <div className='row ps-5'>
          NOTICE:
        </div>
        <div className='row ps-4'>
          <Space size={10} direction="vertical">
            <Typography.Title level={4}>TODAY'S FORECAST</Typography.Title>
            <Table rowClassName={() => "rowClassName1"}
              bordered
              columns={columns}
              className='tableOfHour'
            />
          </Space>
        </div>
        <div className='row ps-6'>
        <Typography.Title level={4}>AIR CONDITION</Typography.Title>
            <div className='col-4'>
                Hello
            </div>
            <div className='col-4'>
                Hi

            </div>

        </div>
      </div>


    </>
  )
}

export default Weather