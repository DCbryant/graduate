import React,{Component} from 'react'
import CarList from '../../component/carlist/CarList'
import DetailMachine from '../../component/detailMachine/DetailMachine'
import News from '../../component/news/News' 
import Notice from '../../component/notice/Notice' 


import { Row, Col } from 'antd'
class Home extends Component{
    render(){
        return(
            <div>
                <CarList />
                <div id='content'>
                <Row>
                    <Col span={6}>
                        <DetailMachine />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <News />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Notice />
                    </Col>
                </Row>
                    
                </div>
            </div>
        )
    }
}

export default Home