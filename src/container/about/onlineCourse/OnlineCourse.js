import React from 'react'
import { Row, Col,Card } from 'antd'

export default class OnlineCourse extends React.Component{
    render(){
        const { Meta } = Card
        return(
            <div>
                <Row type="flex">
                    <Col span={6} order={4} style={{marginBottom:'20px'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={3}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={2}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={1}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={3}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={2}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                    <Col span={6} order={1}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                        >
                            <Meta
                                title="课程预览"
                                description="预览"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}