import React from 'react'
import {Card,Row,Col} from 'antd'
import {withRouter,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const { Meta } = Card

@withRouter
@connect(
    state => state
)
export default class QuestionBank extends React.Component{

    handleClick = () => {
        this.props.history.push({
            pathname:'/topic'
        })
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={6}>
                        <Card style={{cursor:'pointer'}} title='题库一' onClick={this.handleClick}>
                            <Meta
                                description="焊接"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card title='题库二'>
                            <Meta
                                description="材料"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card title='题库三'>
                            <Meta
                                description="机械"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}