import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@(withRouter)
export default class Notice extends React.Component{
    state = {
        data : []
    }

    componentDidMount(){
        axios.get('/home/notice').then((response) => {
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
            pathname:`/render/${id}`,
            state:{
                path:'/home/notice',
                id:`${id}`
            }
        })
    }

    render(){
        

        return (
            <div style={{marginTop:'50px'}}>
                <h3 style={{ marginBottom: 16 }}>通知公告</h3>
                <ul className='list'>
                    {
                        this.state.data.map(item => {
                            let id = item._id
                            return (
                            <li key={item.desc}
                                onClick={() => {
                                    this.handleClick(id)
                                }}
                            >{item.desc}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}