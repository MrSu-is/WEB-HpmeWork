import React from 'react'
import './Mainpage.css'
import { clearToken } from "../Operation/Tokenop";
import { Layout, Menu, Icon } from 'antd';
import { adminRoutes } from "../route/route";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);


function Mainpage(props) {
  return (
    <Layout>
    <Header className="header">
      <div>
        <h1 style={{color: "white"}}>一个普通的管理后台</h1>
      </div>
      <Menu
      theme="dark"
      onClick={p => {
        if (p.key === "quit") {
          clearToken();
          props.history.push("/login");
        }
      }}
    >
      <Menu.Item key="quit">退出</Menu.Item>
    </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[props.location.pathname]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routes.map(route => {
              return (
                <Menu.Item
                  key={route.path}
                  onClick={p => props.history.push(p.key)}
                >
                  <Icon type={route.icon} />
                  {route.title}
                </Menu.Item>
              );
            })}
          </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/*<Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>*/}
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 848,
            
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default connect(state => state)(withRouter(Mainpage));




