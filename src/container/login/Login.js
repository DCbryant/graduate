import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Select } from 'antd'
import './index.css'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
const Option = Select.Option
const FormItem = Form.Item
@connect(
  state => state.user,
  {login}
)
class NormalLoginForm  extends React.Component{

      state = {
        user:'',
        pwd:'',
        type:''
      }

      handleChange = (key,e) => {
        this.setState({
          [key]:e.target.value
        })
      }
      
      handleSubmit = (e) => {
        e.preventDefault()
      }

      handleLogin = () => {
        this.props.login(this.state)
      }

      

      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div style={{margin:'0 auto',padding:'100px 300px'}}>
            {(this.props.redirectTo && this.props.redirectTo !== '/login') ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Form  onSubmit={this.handleSubmit} className="login-form" autoComplete="off">
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
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <Button onClick={this.handleLogin} type='primary'>登陆</Button>
              </FormItem>
            </Form>
            {this.props.msg ? <p style={{color:'red',fontSize:'20px'}}>{this.props.msg}</p> : null}
          </div>
        )
      }
}

const Login = Form.create()(NormalLoginForm)

export default  Login