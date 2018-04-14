import React from 'react'
import { Row, Col,Card } from 'antd'
import axios from 'axios'

export default class Internet extends React.Component{

    state = {
        data : []
    }

    componentDidMount(){
        axios.get('/work/internet').then((response) => {
            this.setState({
                data:response.data.doc
            })
          })
          .catch((error) => {
            console.log(error)
          })
    }

    handleClick = (id) => {
        this.props.history.push({
            pathname:`/play/${id}`,
            state:{
                path:'/work/internet',
                id:`${id}`
            }
        })
    }

    render(){
        const { Meta } = Card
        console.log(this.state.data)
        return(
            <div>
                <Row type="flex">
                    {
                         this.state.data.map(item => {
                            let id = item._id
                            return (
                                <Col 
                                    key={id} 
                                    span={6} 
                                    order={4} 
                                    style={{marginBottom:'20px'}}
                                    onClick={() => {
                                        this.handleClick(id)
                                    }} 
                                >
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="preview" src={require('./imgs/1.jpg')} />}
                                    >
                                        <Meta
                                            title={item.desc}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}