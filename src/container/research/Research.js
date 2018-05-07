import React,{Component} from 'react'
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import ResearchItem from './research-item/ResearchItem'
import ResearchWorking from './research-working/ResearchWorking'

const { Header, Footer, Sider, Content } = Layout
class Research extends Component{
    render(){
        return(
            <div style={{marginTop:60}}>
                <Layout >
                    <Sider style={{backgroundColor:'#fff'}}>
                        <ul>
                            <li><Link to="/research/item">科研项目</Link></li>
                            <li><Link to="/research/work">科研加工</Link></li>
                        </ul>
                    </Sider>
                    <Content className='special'  style={{backgroundColor:'#fff'}}>
                        <Switch>
                            <Route exact path="/research/item" component={ResearchItem}/>
                            <Route path="/research/work" component={ResearchWorking}/>
                            <Redirect path="/" to={{pathname: '/research/item'}} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Research