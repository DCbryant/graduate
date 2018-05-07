import React, { Component } from "react";
import { BrowserRouter,Link,Route,Switch,Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout, Icon, Button, Menu} from "antd";
import './App.css'
import Home from './container/home/Home'
import About from './container/about/About'
import Machine from './container/machine/Machine'
import Work from './container/work/Work'
import Research from './container/research/Research'
import Contact from './container/contact/Contact'
import Login from './container/login/Login'
import Register from './container/register/Register'
import Render from './component/render/Render'
import Play from './component/play/Play'
import User from './component/user/User'
import LogOut from './component/logout/LogOut'
import Chat from './component/chat/Chat'
import Topic from './component/topic/Topic'
import axios from 'axios'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {connect} from 'react-redux'
import {event} from './EventEmitter'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

  state = {
    isUser:false,
    show:false
  }

  componentDidMount() {
    event.on('dispatch', (args) => {
      this.setState({
        isUser:args
      })
    })
  }

  handleClickUser = () => {
    this.setState({
      show:!this.state.show
    })
  }

  handleClick = () => {
    this.setState({
      show:false
    })
  }

  render() {
    
    let isShow = {
      display: this.state.show ? 'flex' : 'none'   
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='bg'>
            <Layout className='header'>
              <Header style={{backgroundColor:'#fff'}}>
                <div className='logo' style={{float:'left'}}>
                  <Link to="/">
                    <img src={require('./logo.png')} alt='logo' width={100} height={64} style={{cursor:'pointer'}} />
                  </Link>
                </div>
                <nav>
                  <ul className='nav'>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="/machine">加工中心</Link></li>
                    <li><Link to="/work">教学工作</Link></li>
                    <li><Link to="/research">科研技术</Link></li>
                    <li><Link to="/contact">联系我们</Link></li>
                    {
                      !this.state.isUser ? (
                        <div>
                          <Button ><Link style={{textDecoration:'none'}} to='/register'>注册</Link></Button>
                          <Button ><Link style={{textDecoration:'none'}} to='/login'>登陆</Link></Button>
                        </div>
                      ): (
                          <div style={{position:'relative',float:'left',zIndex:'9999'}}>
                            <Icon type="user" onClick={this.handleClickUser} style={{ fontSize: 24, color: '#ccc',cursor:'pointer' }} />
                            <ul className='userNav' style={isShow}>
                              <li><Link to="/user" onClick={this.handleClick}>主页</Link></li>
                              <li><Link to="/logout" onClick={this.handleClick}>登出</Link></li>
                            </ul>
                          </div>
                        )
                    }
                  </ul>
                </nav>
              </Header>
            </Layout>
            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/machine" component={Machine}/>
                <Route path="/work" component={Work}/>
                <Route path="/research" component={Research}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/render/:id" component={Render}/>
                <Route path="/play/:id" component={Play}/>
                <Route path="/user" component={User}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/logout" component={LogOut}/>
                <Route path="/chat/:id" component={Chat}/>
                <Route path="/topic" component={Topic}/>
                <Redirect path="/" to={{pathname: '/'}} />
              </Switch>
            </main>
            <footer className='footer'>
              <div className='footerStyle'>
                <span>版权所有：长江大学</span>
                <span>地址：湖北省荆州市南环路1号</span>
                <span>邮编：434023</span>
                <span>备案号：鄂ICP备05003301号</span>
                <span>技术支持：dcbryant</span>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
