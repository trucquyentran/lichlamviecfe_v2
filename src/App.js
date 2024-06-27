import React , { useEffect, useState }from 'react';
import { EyeOutlined,EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Table, Divider ,Button, Row, Col, Modal,  Form, Input, Select, Space } from 'antd';


import Home from './CalendarComponents/Home';

import AddCalendar from './CalendarComponents/AddCalendar';
import EditCalendar from './CalendarComponents/EditCalendar';

import ListCalendar from './CalendarComponents/ListCalendar';

const { Content} = Layout;



function App() {

 
  return (
    
 <Home/>



  );
}

export default App;
