import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'

@connect(
    state => state.user,
)
export default class User extends React.Component{

    render(){
                
        return(
            <div>
                <Card title="基本个人信息"  style={{ width: '100%' }}>
                    <p>姓名：{this.props.user}</p>
                    <p>类型：{this.props.type}</p>
                    <p>专业：{this.props.profession}</p>
                    <p>院系：{this.props.department}</p>
                </Card>
            </div>
        )
    }
}
