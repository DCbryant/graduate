import React from 'react'
import {List} from 'antd'
import { Pagination } from 'antd'
import axios from 'axios'

export default class ResearchItem extends React.Component{

    state = {
        current: 1,
        data:[]
    }

   

    handleClick = (id) => {
        this.props.history.push({
            pathname:`/render/${id}`,
            state:{
                path:'/research/item',
                id:`${id}`
            }
        })
    }

    componentDidMount(){
        this.onChange(1)
    }

    onChange = (page) => {
        let param = {
            currentPage: page,
            pageSize: 5
          }
        axios.get('/research/item', {
                params: param
            })
            .then((response) => {
                console.log(response)
                this.setState({
                    data:response.data.doc
                })
            })
            .catch((error) => {
                console.log(error)
            })

        this.setState({
            current: page,
        })
    }

    render(){
        return(
            <div style={{width:500}}>
                <h3 style={{ marginBottom: 16 }}>科研项目</h3>
                <ul className='list'>
                    {
                        this.state.data.map(item => {
                            let id = item._id
                            return (
                            <li key={id}
                                onClick={() => {
                                    this.handleClick(id)
                                }}
                            >{item.desc}</li>)
                        })
                    }
                </ul>
                <Pagination current={this.state.current} onChange={this.onChange} total={50} />
            </div>
        )
    }
}