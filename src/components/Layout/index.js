import React from 'react';
import {connect} from "react-redux";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { ScheduleOutlined } from '@ant-design/icons';

import './index.scss'
import mainLogo from 'assets/images/mainLogo.png'
const { Header, Content, Footer, Sider } = Layout;

const Wrapper = (props) => {
    const {content} = props
    const pathname = window.location.pathname

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo" >
                <img src={mainLogo} alt='Logo'/>
                    <span>To Do List</span>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
                    <Menu.Item key="/dashboard" icon={<ScheduleOutlined />} >
                        <Link to='/dashboard'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="/users" icon={<ScheduleOutlined />}>
                        <Link to='/users'>Users</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {content}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created Ündefined</Footer>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = state => ({
    // currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    // logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
