import React,{Component} from 'react'

export default class SelectionsBar extends Component {
    constructor(props) {
      super(props);
      this.handleChange=this.handleChange.bind(this); // 为事件绑定this
    }
    handleChange(event) {
      this.props.onChange(event) // 答案选择触发事件传递给props中的onChange
    }
    render() {
      var selection_type = this.props.remark === '1' ? 'checkbox' : 'radio'; // 多选题使用checkbox，单选题使用radio，注意判断题也是单选
      var selection_name = this.props.reamrk === '1' ? 'choose_mul' : 'choose_one'
      return (
        <form>
          <fieldset>
            {/* 每道题至少两个选择项A和B */}
            <input name={selection_name} type={selection_type} id={this.props.id+'_A'} value='A' onChange={this.handleChange} /><label htmlFor={this.props.id+'_A'}>{this.props.answerA}</label><br /> 
            {/* 控件ID设为题目的ID+该控件的符号（A?B?C?...） */}
            <input name={selection_name}  type={selection_type} id={this.props.id+'_B'} value='B'  onChange={this.handleChange} /><label htmlFor={this.props.id+'_B'}>{this.props.answerB}</label><br />
            {/* // C以下根据内容不为空则显示 */}
            {this.props.answerC === '' ? '' : (<span><input name={selection_name}  type={selection_type} id={this.props.id+'_C'} value='C'  onChange={this.handleChange} /><label htmlFor={this.props.id+'_C'}>{this.props.answerC}</label><br /></span>)} 
            {this.props.answerD === '' ? '' : (<span><input name={selection_name}  type={selection_type} id={this.props.id+'_D'} value='D'  onChange={this.handleChange} /><label htmlFor={this.props.id+'_D'}>{this.props.answerD}</label><br /></span>)}
          </fieldset>
        </form>
      )
    }
  }
