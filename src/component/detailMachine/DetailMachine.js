import React,{Component} from 'react'
import {Carousel} from 'antd'
import ReactDOM from 'react-dom'

class DetailMachine extends Component{
  render(){
    return(
      <div style={{marginTop:'50px'}}>
        <h3>加工中心</h3>
        <Carousel autoplay>
          <div><img src={require(`./imgs/1.jpg`)} width={300} height={160} alt='carousel-img' /></div>
          <div><img src={require(`./imgs/2.jpg`)} width={300} height={160} alt='carousel-img' /></div>
          <div><img src={require(`./imgs/3.jpg`)} width={300} height={160} alt='carousel-img' /></div>
          <div><img src={require(`./imgs/4.jpg`)} width={300} height={160} alt='carousel-img' /></div>
        </Carousel>
        <p>
          实训中心是长江大学机械工程学院帮助学生完成金工实习，创新实习，机械创新大赛等可能存在加工需求的工厂，对相关的
        </p>
      </div>
    )
  }
}






export default DetailMachine