import React,{Component} from 'react'
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import ImgTool from './imgTool/ImgTool'
import Requirements from './requirements/Requirements'
import Regulations from './regulations/Regulations'
const { Header, Footer, Sider, Content } = Layout

class About extends Component{
    render(){
        return(
            <div style={{marginTop:30}}>
                <Layout>
                    <Sider style={{backgroundColor:'#fff'}}>
                        <ul>
                            <li><Link to="/machine/img-tool">机床图片</Link></li>
                            <li><Link to="/machine/requirements">操作要求</Link></li>
                            <li><Link to="/machine/regulations">安全规范</Link></li>
                        </ul>
                    </Sider>
                    <Content  style={{backgroundColor:'#fff'}}>
                        <Switch>
                            <Route exact path="/machine/img-tool" component={ImgTool}/>
                            <Route path="/machine/requirements" component={Requirements}/>
                            <Route path="/machine/regulations" component={Regulations}/>
                            <Redirect path="/" to={{pathname: '/machine/img-tool'}} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default About