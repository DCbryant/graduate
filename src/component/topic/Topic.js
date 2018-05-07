import React,{Component} from 'react'
import QuestionBar from './QuestionBar'
import SubmitBar from './SubmitBar'
import './index.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
export default class Topic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: [
            
        ], // 初始题目集
        current_questions: [], // 当前题目集，加载页面后与初始题目集相同，检查后则只保留错题
        answered: false, // 当前答题状态
        answers: [], // 答案集
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckClick = this.handleCheckClick.bind(this);
    }
    componentDidMount() { 
        console.log(this.props.location.state)
        axios.get(`/topic${this.props.location.state}`)
            .then((res) => {
                let answers = []
                res.data.doc.forEach(v => {
                    answers.push({
                        'id':v._id,
                        answer:''
                    })
                })
                this.setState({
                    question:res.data.doc,
                    current_questions:res.data.doc,
                    answers:answers
                })
                console.log(this.state.answers)
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
    handleChange(event) { // 选择控件的相应事件
      const id =event.target.id.split('_')[0]// 由控件ID获得题目ID和所作选择
      const selection = event.target.id.split('_')[1]
      const type = event.target.type;
      const answers = this.state.answers
      if (type==='radio') { // 单选题直接给答案赋值
        answers.find(answer=>{
            return answer.id===id
        }).answer = selection
      } else {
        if (event.target.checked) { // 多选题，如果勾选
          if (!answers.find(answer=>answer.id===id).answer.includes(selection)){
            var tmp = answers.find(answer=>answer.id===id).answer + selection;
            tmp = tmp.split('').sort().join(''); // 赋值前排序，考虑到用户奇怪的操作方式，想想：ABC===ACB吗？
            answers.find(answer=>answer.id===id).answer = tmp;
          }
        } else { // 如果去掉勾选，答案中也要相应删除
          if (answers.find(answer=>answer.id===id).answer.includes(selection)){
            answers.find(answer=>answer.id===id).answer = answers.find(answer=>answer.id===id).answer.replace(selection,'')
          }
        }
      }
      this.setState({answers:answers,})
    }
    handleCheckClick(event) { // 检查按钮的相应事件
      event.preventDefault();
      if (event.target.innerHTML==='检查') {
        this.setState({answered:true,});
      } else { // 若是再做一遍错题，则需要根据正确与否更新错题库
        var current_questions = [];
        var answers = [];
        this.state.current_questions.forEach((question)=> {
          if (this.state.answers.find(answer=>{
              return answer._id === question.id
          }).answer!==question.answer) {
            current_questions.push(question);
            answers.push({'id':question.id,'answer':''})
          }
        })
        this.setState({
            current_questions:current_questions,
            answers:answers,
            answered:false,
        })
      }
    }
    render() {
      var questions = [];
      this.state.current_questions.forEach((question)=>{
        questions.push(
            <div className="box effect2" key={question._id}>
                <QuestionBar 
                    question={question} 
                    answer={this.state.answers.find(answer=>answer.id===question._id)} 
                    answered={this.state.answered} 
                    onChange={this.handleChange} 
                />    
            </div>
        )
      })
      return(<div>
                <div>{questions}</div>
                    <div className="box effect2">
                        <SubmitBar 
                            answered={this.state.answered} 
                            onClick={this.handleCheckClick} 
                        />
                    </div>
                </div>
            )
    }
  }
  