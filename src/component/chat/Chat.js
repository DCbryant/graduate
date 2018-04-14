import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Input,Button } from 'antd'
import './index.css'
import {getMsgList,sendMsg,recvMsg,readMsg} from '../../redux/chat.redux'
import { List, Avatar,Row, Col,Icon } from 'antd'

@withRouter
@connect(
    state => state,
    {getMsgList,sendMsg,recvMsg,readMsg}
)
export default class Chat extends React.Component{
    state = {
        text:'',
        msg:[]
    }

    componentDidMount(){
        if(!this.props.chat.chatMsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }

    componentWillUnmount(){
        const to = this.props.match.params.user
        this.props.readMsg(to)
    }

    handleSubmit = () => {
        const input = document.querySelector('.send-input')
        const from = this.props.user._id 
        const to =  this.props.match.params.id
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        // 好奇怪,setState又不生效
        // this.setState({
        //     text:''
        // })
        input.value = ''
    }

    render(){
        const userid = this.props.user._id 
        const chatid = getChatId(userid,this.props.match.params.id)
        const chatmsgs = this.props.chat.chatMsg.filter( v => v.chatid === chatid )
        return (
            <div className='chat-wrapper'>
                <div className='chatList'>
                    {
                        chatmsgs.map(v => {
                            return v.from === userid ? 
                            (
                                <div key={v._id} className='left'>
                                    <span>
                                        <Icon type='user' /> {this.props.user.user}
                                    </span>
                                    <ul>
                                        <li>{v.content}</li> 
                                    </ul>
                                </div>
                            ):(
                                <div key={v._id} className='right'>
                                    <span>
                                        <Icon type='user' /> {this.props.location.state}
                                    </span>
                                    <ul>
                                        <li>{v.content}</li>
                                    </ul>
                                </div> 
                            )
                        })
                    }
                </div>
                <div className='send-wrapper'>
                    <input 
                        className='send-input' 
                        onChange = {e => {
                            this.setState({text:e.target.value})
                        }} 
                    />
                    <Button onClick={this.handleSubmit}>发送消息</Button>
                </div>
            </div>
        )
    }
}

function getChatId(userId,targetId){
	return [userId,targetId].sort().join('_')
}
   