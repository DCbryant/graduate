const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0,'__v':0}
const NewsModel = model.getModel('news')
const NoticeModel = model.getModel('notice')
const CNCModel = model.getModel('CNC')
const playModel = model.getModel('play')
const lessonModel = model.getModel('lesson')
const planModel = model.getModel('plan')
const specialModel = model.getModel('special')
const ItemModel = model.getModel('researchItem')
const ChatModel = model.getModel('chat')
const TopicModel = model.getModel('topic')


// TopicModel.create({ 
//     'index':2,
//     'description':'2、在结构性和扩散氢含量相同的情况下，确定冷裂纹敏感性应当是()',
//     'answer':'A',
//     'A':'A. 钢的碳当量',
//     'B':'B. 钢的含碳量',
//     'C':'C. 钢的组织',
//     'D':'D. 焊接方法',
// }, function(error,doc){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(doc);
//     }
//  })

 Router.get('/topic',(req,res) => {
    TopicModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})


Router.get('/user/getmsglist',(req,res) => {
    const user = req.cookies.userid
    // '$or':[{from:user,to:user}]
    User.find({},(e,userdoc) => {
        ChatModel.find({'$or':[{from:user},{to:user}]},(err,doc) =>{
            if(!err){
                return res.json({code:0,msgs:doc})
            }
        })
    })
})

Router.post('/user/readmsg',(req,res) => {
    const userid = req.cookies.userid
    const {from} = req.body
    ChatModel.update(
        {from,to:userid},
        {'$set':{read:true}},
        {'multi':true},
        function(err,doc){
            console.log(doc)
            if(!err){
                return res.json({code:0,num:doc.nModified})
            }
            return res.json({code:1,msg:'修改失败'})
        }
    )
})

Router.get('/info',(req,res) => {
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,(err,doc) => {
        if(err){
            res.status(500).json({code:1,msg:`服务端出现错误：${err}`})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

Router.get('/user/list',(req,res) => {
    const {type} = req.query
    console.log(type)
    // 清空数据
    // User.remove({},(err,doc) =>{})
    User.find({type},(err,doc) =>{
        return res.json({code:0,data:doc})
    })
})



 Router.get('/research/item',(req,res) => {
    console.log(req.query)
    
    let currentPage = parseInt(req.query['currentPage'],10) // 转换前端传入当前页码
    let pageSize = parseInt(req.query['pageSize'],10) // 转换前端传入的每页大小
    let skip = (currentPage-1)*pageSize // 实现分割查询的skip
    let params = {}
    ItemModel.find(params).skip(skip).limit(pageSize).exec(function(err,doc){
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})

Router.post('/research/item',(req,res) => {
    const {id} = req.body
    ItemModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})







Router.get('/work/special',(req,res) => {
    console.log(req.query)
    
    let currentPage = parseInt(req.query['currentPage'],10) // 转换前端传入当前页码
    let pageSize = parseInt(req.query['pageSize'],10) // 转换前端传入的每页大小
    let skip = (currentPage-1)*pageSize // 实现分割查询的skip
    let params = {}
    specialModel.find(params).skip(skip).limit(pageSize).exec(function(err,doc){
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})

Router.post('/work/special',(req,res) => {
    const {id} = req.body
    specialModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})



Router.get('/work/plan',(req,res) => {
    console.log(req.query)
    
    let currentPage = parseInt(req.query['currentPage'],10) // 转换前端传入当前页码
    let pageSize = parseInt(req.query['pageSize'],10) // 转换前端传入的每页大小
    let skip = (currentPage-1)*pageSize // 实现分割查询的skip
    let params = {}
    planModel.find(params).skip(skip).limit(pageSize).exec(function(err,doc){
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})

Router.post('/work/plan',(req,res) => {
    const {id} = req.body
    planModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})


 Router.get('/work/internet',(req,res) => {
    lessonModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})

Router.post('/work/internet',(req,res) => {
    const {id} = req.body
    lessonModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})








Router.get('/about/play',(req,res) => {
    playModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})

Router.post('/about/play',(req,res) => {
    const {id} = req.body
    playModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})

Router.get('/home/news',(req,res) => {
    NewsModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})

Router.post('/home/news',(req,res) => {
    const {id} = req.body
    NewsModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})


Router.get('/home/notice',(req,res) => {
    NoticeModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})

Router.post('/home/notice',(req,res) => {
    const {id} = req.body
    NoticeModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})

Router.get('/home/cnc',(req,res) => {
    CNCModel.find({},(err,doc) => {
        if(!err){
            res.json({
                doc
            })
        }
    })
})

Router.post('/home/cnc',(req,res) => {
    const {id} = req.body
    CNCModel.find({_id:id},(err,doc) => {
        if(!err){
            console.log(doc)
            res.json({
                doc
            })
        }
    })
})



// Router.get('/list',(req,res) => {
//     // User.remove({},(e,d) => {})
//     const {type} = req.query
//     User.find({type},(err,doc) => {
//         return res.json({code:0,data:doc})
//     })
// })

Router.post('/login',(req,res) => {
    const {user,pwd} = req.body
    // 在接口上除去pwd
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,(err,doc) => {
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        // 登陆的时候返回一个cookie来保存状态
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

Router.post('/register',(req,res) => {
    const {user,pwd,type} = req.body
    User.findOne({user},(err,doc) => {
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save((e,d) => {
            if(e){
                return res.json({code:1,msg:'后端出错'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            return res.json({code:0,data:{user,type,_id}})
        })
    })
})


function md5Pwd(pwd){
    const salt = 'dcbryant' 
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router