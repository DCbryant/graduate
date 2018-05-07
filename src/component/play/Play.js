import React from 'react'
import axios from 'axios'
import {Card} from 'antd'


export default class Play extends React.Component{

    state = {
        data:[]
    }
    

    componentDidMount(){
        const {path,id} = this.props.location.state
        console.log(path,id)
        axios.post(`${path}`,{
            id:id
        }).then((response) => {
            console.log(response)
            this.setState({
                data:response.data.doc
            })
          })
          .catch((error) => {
            console.log(error)
          })
    }
    render(){

        return(
            <div style={{marginTop:'30px'}}>
                {
                    this.state.data.length && this.state.data.map(item => {
                        return (
                            <Card key={item._id} title={item.desc}>
                                <video style={{width:'100%',height:'100%'}}  controls="controls" src={item.url}></video>
                            </Card>
                        )
                    })
                }
                
            </div>
        )
    }
}