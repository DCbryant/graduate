import React,{Component} from 'react'
import DescriptionBar from './DescriptionBar'
import SelectionsBar from './SelectionsBar'
export default class QuestionBar extends Component {
    render() {
      return (
        <div>
            {/* // 题目描述部件 */}
          <DescriptionBar description={this.props.question.description} /> 
          <SelectionsBar // 选择部件
              id={this.props.question._id} // 传递属性值
              answer={this.props.question.answer}
              answerA={this.props.question.A}
              answerB={this.props.question.B}
              answerC={this.props.question.C}
              answerD={this.props.question.D}
              answerE={this.props.question.E}
              remark={this.props.question.remark}
              onChange={this.props.onChange}
            />
            {/* 如果当前已经检查，且回答与正确答案不符，则以红色显示正确的答案。 */}
            {this.props.answered ? (this.props.question.answer===this.props.answer.answer? ('') : (<p  style={{"color":"red"}}>正确答案：{this.props.question.answer}</p>) ) : ('')} 
        </div>
        )
    }
  }
  