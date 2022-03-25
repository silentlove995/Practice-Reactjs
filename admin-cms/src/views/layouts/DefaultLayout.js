import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Switch, Route, Redirect} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function DefaultLayout({routers}) {
    let [collapsed, setCollapse ] = useState(false);

    const onCollapse = collapsed => {
        setCollapse(collapsed)
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {
                        routers.map((menu) => {
                            return menu.children && menu.children.length !== 0 ? (
                                <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
                                    {menu.children.map((subMenu) => {
                                        return <Menu.Item key={subMenu.path}><Link to={subMenu.path}>{subMenu.title}</Link></Menu.Item>
                                    })}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={menu.path} icon={menu.icon}>
                                    <Link to={menu.path}>{menu.title}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                    {/* main content */}
                    <Switch>
                        {
                            routers.map(router =>{
                                return router.children && router.children.length !== 0 ? (
                                    // submenu
                                    router.children.map(subRouter => {
                                        return <Route path={subRouter.path}>
                                            {subRouter.component}
                                        </Route>
                                    })
                                ) : (
                                    <Route path={router.path}>
                                        {router.component}
                                    </Route>
                                )
                            })
                        }
                        <Route path="/">
                            <Redirect to={"/page404"}/>
                        </Route>
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}