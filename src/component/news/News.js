import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@(withRouter)
class News extends React.Component{
    state = {
        data : []
    }

    componentDidMount(){
        axios.get('/home/news').then((response) => {
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
                path:'/home/news',
                id:`${id}`
            }
        })
    }

    render(){
       
        return (
            <div style={{marginTop:'50px'}}>
                <h3 style={{ marginBottom: 16 }}>新闻动态</h3>
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

export default News