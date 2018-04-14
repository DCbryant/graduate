import React from 'react'
import axios from 'axios'
import {Card} from 'antd'
const ReactMarkdown = require('react-markdown')

export default class Render extends React.Component{
    state = {
        input:''
    }

    componentDidMount(){
        const {path,id} = this.props.location.state
        
        axios.post(`${path}`,{
            id:id
        }).then((response) => {
            console.log(response);
            this.setState({
                input:response.data.doc[0]
            })
          })
          .catch((error) => {
            console.log(error)
          })
    }
    render(){
        console.log(this.state.input)
        return(
            <div style={{marginTop:'30px'}}>
                <Card title={this.state.input.desc}>
                    <ReactMarkdown source={this.state.input.content} />
                </Card>
            </div>
        )
    }
}