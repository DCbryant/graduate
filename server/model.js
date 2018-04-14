const mongoose = require('mongoose')

// 链接mongo,并且使用chat这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/graduate'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',() => {
    console.log('mongo collected success')
})

const models = {
    user:{
        'user':{type:String,'require':true},
        'pwd':{type:String,'require':true},
        'type':{type:String,'require':true},
        // 职位简介  学生没有这个简介
        'desc':{type:String,'require':true},
        // 职位名字
        'title':{type:String,'require':true},
        // 学生才有成绩
        graduate:{
            'a':{type:Number,'require':true},
            'b':{type:Number,'require':true},
            'c':{type:Number,'require':true}
        },
        klass:{type:String,'require':true},
        profession:{type:String,'require':true},
        lesson:{type:String,'require':true}
    },
    CNC:{
        'path':{type:String,'require':true},
        'desc':{type:String,'require':true},
        'content':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    news:{
        'desc':{type:String,'require':true},
        'content':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    notice:{
        'desc':{type:String,'require':true},
        'content':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    play:{
        'desc':{type:String,'require':true},
        'url':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    lesson:{
        'desc':{type:String,'require':true},
        'url':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    plan:{
        'desc':{type:String,'require':true},
        'content':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    special:{
        'desc':{type:String,'require':true},
        'content':{type:String,require:true,default:''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    researchItem:{
        'desc':{type:String,'require':true},
        'type':{type:String,'require':true},
        'part':{type:String,'require':true},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    chat:{
        'chatid':{'type':String,'require':true},
        'from':{'type':String,'require':true},
        'to':{'type':String,'require':true},
        'read':{'type':Boolean,'default':false},
        'content':{'type':String,'require':true,'default':''},
        'create_time':{'type':String,'require':true,'default':new Date().getTime()}
    },
    topic:{
        index:{type:Number,'require':true},
        description:{type:String,'require':true},
        answer:{type:String,'require':true},
        A:{type:String,'require':true},
        B:{type:String,'require':true},
        C:{type:String,'require':true},
        D:{type:String,'require':true},
        E:{type:String,'require':true,'default':''},
        remark:{type:String,'require':true,'default':'0'},
    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:(name) => {
        return mongoose.model(name)
    }
}