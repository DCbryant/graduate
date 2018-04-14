import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Select } from 'antd'
import './index.css'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
const FormItem = Form.Item
const Option = Select.Option

@connect(
  state => state.user,
  {register}
)
class NormalRegisterForm  extends React.Component{
    state = {
      user:'',
      pwd:'',
      repeat:'',
      type:''
    }

    handleChange = (key,e) => {
      this.setState({
        [key]:e.target.value
      })
    }

    handleRegister = () => {
      this.props.register(this.state)
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault()
    }

      render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form
        return (
          <div style={{margin:'0 auto',padding:'100px 300px'}}>
            {(this.props.redirectTo && this.props.redirectTo !== '/login') ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input 
                    onChange={e => this.handleChange('user',e)}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"   
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input 
                    onChange={e => this.handleChange('pwd',e)}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"   
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Repeated password', {
                  rules: [{ required: true, message: 'Please input your Password! again' }],
                })(
                  <Input 
                    onChange={e => this.handleChange('repeat',e)}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repeat Password" 
                  />
                )}
              </FormItem>
              <Select 
               value={this.state.type} 
               onChange={(key) => {
                  this.setState({
                    type:key
                  })
               }}
              >
                <Option value="student">学生</Option>
                <Option value="teacher">教师</Option>
              </Select>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button onClick={this.handleRegister} type='primary'>注册</Button>
              </FormItem>
            </Form>
            {this.props.msg ? <p style={{color:'red',fontSize:'20px'}}>{this.props.msg}</p> : null}
          </div>
        )
      }
}

const Register = Form.create()(NormalRegisterForm)

export default  Register