
import axios from 'axios'
import {event} from '../EventEmitter'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGOUT = 'LOGOUT'
const initState = {
    isAuth:false
}

// reducer
export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
            event.emit('dispatch',true)
            return {...state,redirectTo:'/user',isAuth:true,...action.payload}
        case ERROR_MSG:
            event.emit('dispatch',false)
            return {...state,isAuth:false,msg:action.msg}
        case LOGOUT:
            event.emit('dispatch',false)
            return {...state,redirectTo:'/'} 
        default:
            return state
    }
}



export function register({user,pwd,repeat,type}){
    if(!user || !pwd || !type){
        return errorMsg('用户名、密码必须输入')
    }
    if(pwd !== repeat){
        return errorMsg('两次密码输入不一致')
    }
    return dispatch => {
        axios.post('/register',{user,pwd,type})
            .then(res => {
                if(res.status === 200 && res.data.code === 0){
                    dispatch(authSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function login({user,pwd}){
    if(!user || !pwd ){
        return errorMsg('用户、密码必须输入')
    }
    return dispatch => {
        axios.post('/login',{user,pwd})
            .then(res => {
                if(res.status === 200 && res.data.code === 0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}




function authSuccess(obj){
    // 过滤掉pwd
    const {pwd,...data} = obj
    return {type:AUTH_SUCCESS,payload:data}
}

function errorMsg(msg){
    return {type:ERROR_MSG,msg:msg}
}

export function logoutSubmit(){
    return {type:LOGOUT}
}