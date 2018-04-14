import React from 'react'
import { Row, Col,Card } from 'antd'

export  default class ImgTool extends React.Component{
    render(){
        const { Meta } = Card
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }}  src={require(`./imgs/1.jpg`)} />}
                        >
                            <Meta
                            title="车床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/2.jpg`)} />}
                        >
                            <Meta
                            title="铣床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/3.jpg`)} />}
                        >
                            <Meta
                            title="刨床"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/4.jpg`)} />}
                        >
                            <Meta
                            title="磨床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/5.jpg`)} />}
                        >
                            <Meta
                                title="钻床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/6.jpg`)} />}
                        >
                            <Meta
                            title="镗床"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/7.jpg`)} />}
                        >
                            <Meta
                            title="曲轴机床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/8.jpg`)} />}
                        >
                            <Meta
                            title="锻压机床"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="example" style={{ width: 240,height:240 }} src={require(`./imgs/9.jpg`)} />}
                        >
                            <Meta
                            title="数控机床"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}