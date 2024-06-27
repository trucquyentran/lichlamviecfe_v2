import React , { useEffect, useState }from 'react';
import { EyeOutlined,EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Breadcrumb, Layout, theme, Table, Divider ,Button, Row, Col, Modal,  Form, Input, Select, Space } from 'antd';

// import Head from ' ./Head';
import Head from './Head';
import Foot from './Foot';

import Slide from './Slide';
import ListCalendar from './ListCalendar';
const { Content} = Layout;



function Home() {

  return (
    <Layout >  
        <Head/>
      <Layout>
     <Slide/>
     <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          
          
          <ListCalendar/>
        </Layout>
      </Layout> 
      <Foot/>
    </Layout>
  );
}

export default Home;
