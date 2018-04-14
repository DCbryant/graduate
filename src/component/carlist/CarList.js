import React,{Component} from 'react'
import { Row, Col,Card } from 'antd'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const { Meta } = Card

@(withRouter)
export default class CarList extends Component{

    state = {
        data : []
    }

    handleClick = (id) => {
        this.props.history.push({
            pathname:`/render/${id}`,
            state:{
                path:'/home/cnc',
                id:`${id}`
            }
        })
    }

    componentDidMount(){
        axios.get('/home/cnc').then((response) => {
            this.setState({
                data:response.data.doc
            })
          })
          .catch((error) => {
            console.log(error)
          })
    }

    //嵌套路由，这里是一个问题
    render(){
        const data = 'index1,index2,index3,index4'.split(',').map(v => v)
        const name = '车床,铣床,刨床,磨床'.split(',').map(v => v)
        const desc = '车床简介,铣床简介,刨床简介,磨床简介'.split(',').map(v => v)
        const temp = []
        const listData = []
        for(let i=0;i<data.length;i++){
            temp.push({
                'icon':require(`../imgs/${data[i]}.jpg`),
                'name':name[i],
                'desc':desc[i]
            })
        }

        for(let i=0;i<temp.length;i++){
            listData.push(
                Object.assign(temp[i],this.state.data[i])
            )
        }
        console.log(listData)

        return(
            <div style={{marginTop:'30px'}}>
                <Row gutter={24}>
                    {
                        listData.map((item,index) => {
                            let id = item._id
                            return (
                                <Col 
                                    onClick={() => {
                                        this.handleClick(id)
                                    }}
                                    key={index} span={6} 
                                >
                                        <Card
                                            hoverable
                                            style={{ width: 160,height:200 }}
                                            cover={<img width={160} height={120} alt={item} src={item.icon} />}
                                        >
                                        <Meta
                                            title={item.name}
                                            description={item.intro}
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