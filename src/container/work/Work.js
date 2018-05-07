import React,{Component} from 'react'
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import Internet from './internet/Internet'
import Special from './special/Special'
import OnlineAnswer from './onlineAnswer/OnlineAnswer'
import Question from './question/Question'
import QuestionBank from './question-bank/QuestionBank'
import {connect} from 'react-redux'
const { Header, Footer, Sider, Content } = Layout

@connect(
    state => state.user
)
class About extends Component{
    render(){
        console.log(this.props.type)
        return(
            <div style={{marginTop:60}}>
                <Layout>
                    <Sider style={{backgroundColor:'#fff'}}>
                        <ul>
                            <li><Link to="/work/internet">网络教育</Link></li>
                            <li><Link to="/work/special">特色课程</Link></li>
                            <li><Link to="/work/question-bank">在线题库</Link></li>
                            <li>
                                {
                                    this.props.type === 'student' ? <Link to="/work/online-answer">线上答疑</Link> : null
                                }
                                {
                                    this.props.type === 'teacher' ? <Link to="/work/question">学生问题</Link> : null
                                }
                            </li>
                        </ul>
                    </Sider>
                    <Content className='special'  style={{backgroundColor:'#fff'}}>
                        <Switch>
                            <Route path="/work/internet" component={Internet}/>
                            <Route path="/work/special" component={Special}/>
                            <Route path="/work/question" component={Question}/>
                            <Route path="/work/online-answer" component={OnlineAnswer}/>
                            <Route path="/work/question-bank" component={QuestionBank}/>
                            <Redirect path="/" to={{pathname: '/work/internet'}} />
                        </Switch>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default About