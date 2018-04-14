import React from 'react'
import {Card ,Col, Row} from 'antd'

export default class StudentWork extends React.Component{

    render(){
        const { Meta } = Card
        return(
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="hammer" width={240} height={240} src={require('./imgs/hammer.jpg')} />}
                            onClick={() => {

                            }}
                        >
                            <Meta
                            title="小榔头"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="bicycle" width={240} height={240} src={require('./imgs/bicycle.jpg')} />}
                        >
                            <Meta
                            title="自行车"
                            />
                        </Card>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 240,float:'left' }}
                            cover={<img alt="lucky" src={require('./imgs/lucky.jpg')} />}
                        >
                            <Meta
                            title="福"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}