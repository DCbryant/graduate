import React from 'react'
import {Card, Row, Col} from 'antd'
import {connect} from 'react-redux'
import {getUserList} from '../../../redux/chatuser.redux'
import {withRouter} from 'react-router-dom'

@withRouter
@connect(
    state => state.chatuser,
    {getUserList}
)

export default class Question extends React.Component{
    state = {
        text:'',
        msg:[]
    }

    handleClick = (id,username) => {
        console.log(username)
        this.props.history.push({
            pathname:`/chat/${id}`,
            state:username,
            id:id
        })
    }

    componentDidMount(){
        this.props.getUserList('student')
    }

    render(){
        const { Meta } = Card
        console.log(this.props.userList)
        return (
            <div>
                <h2>
                    线上答疑
                </h2>
                <Row gutter={16}>
                    {
                        this.props.userList.length && this.props.userList.map(item => {
                            return (       
                                <span key={item._id}>
                                    <Col className="gutter-row" span={6}>
                                        <Card title={`${item.user}`}
                                            onClick = {() => {
                                                this.handleClick(item._id,item.user)
                                            }}
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="student" src="http://p7hlkcqwc.bkt.clouddn.com/student.png" />}
                                        >
                                            <Meta
                                                description="材料问题~"
                                            />
                                        </Card>
                                    </Col>
                                    <Col className="gutter-row" span={2}></Col>
                                </span>
                            )                
                        })
                    }
                </Row>
            </div>
        )
    }
}
