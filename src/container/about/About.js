import React,{Component} from 'react'
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import { Layout,Divider } from 'antd'
import CenterIntro from './centerIntro/CenterIntro'
import Idea from './idea/Idea'
import OnlineCourse from './onlineCourse/OnlineCourse'
import Guidance from './guidance/Guidence'
import VideoPlay from './videoPlay/VideoPlay'
import StudentWork from './studentWork/StudentWork'
const { Header, Footer, Sider, Content } = Layout

class About extends Component{
    render(){
        return(
            <div style={{marginTop:60}}>
                <Layout>
                    <Sider style={{backgroundColor:'#fff',width:'150px !important'}}>
                        <ul>
                            <li><Link to="/about/center-intro">中心简介</Link></li>
                            <li><Link to="/about/idea">教学理念</Link></li>
                            <li><Link to="/about/guidance">专家指导</Link></li>
                            <li><Link to="/about/video-play">视频播放</Link></li>
                            <li><Link to="/about/student-work">学生作品</Link></li>
                        </ul>
                    </Sider>
                    <Content  style={{backgroundColor:'#fff'}}>
                        <Switch>
                            <Route exact path="/about/center-intro" component={CenterIntro}/>
                            <Route path="/about/idea" component={Idea}/>
                            <Route exact path="/about/guidance" component={Guidance}/>
                            <Route path="/about/video-play" component={VideoPlay}/>
                            <Route path="/about/student-work" component={StudentWork}/>
                            <Redirect path="/" to={{pathname: '/about/center-intro'}} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default About