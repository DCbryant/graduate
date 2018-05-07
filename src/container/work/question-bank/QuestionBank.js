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

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={6}>
                        <Card
                            onClick = {() => {
                                this.props.history.push({
                                    pathname:'/topic',
                                    state:'/material'
                                })
                            }}
                            title='材料题库'
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="cailiao" height='300px' src="http://p7hlkcqwc.bkt.clouddn.com/cailiao.jpg" />}
                        >
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            onClick = {() => {
                                this.props.history.push({
                                    pathname:'/topic',
                                    state:'/welding'
                                })
                            }}
                            title='焊接题库'
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="hanjie" height='300px' src="http://p7hlkcqwc.bkt.clouddn.com/hanjie.jpg" />}
                        >
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            onClick = {() => {
                                this.props.history.push({
                                    pathname:'/topic',
                                    state:'/mechanical'
                                })
                            }}
                            title='机械题库'
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" height='300px' src="http://p7hlkcqwc.bkt.clouddn.com/jixie.jpg" />}
                        >
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}