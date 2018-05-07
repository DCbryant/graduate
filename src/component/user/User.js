import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'

@connect(
    state => state.user,
)
export default class User extends React.Component{

    render(){
        console.log(this.props)  
        return(
            <div>
                <Card title="基本个人信息"  style={{ width: '100%' }}>
                    <p>姓名：{this.props.user}</p>
                    <p>类型：{this.props.type}</p>
                    {/* this.props.forte */}
                    <p>{this.props.type === 'student' ? `专业：${this.props.profession}` : `擅长：${this.props.forte}`} </p>
                    <p>院系：{this.props.department}</p>
                </Card>
            </div>
        )
    }
}
