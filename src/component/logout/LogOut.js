import React from 'react'
import {Redirect} from 'react-router-dom'
import BrowserCookies from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {connect} from 'react-redux'

@connect(
    state => state.user,
    {logoutSubmit}
)
class LogOut extends React.Component{
    componentDidMount(){
        BrowserCookies.erase('userid')
        this.props.logoutSubmit()
    }

    render(){
        console.log(this.props.redirectTo)
        return <Redirect to='/' />
    }
}



export default  LogOut