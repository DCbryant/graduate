import React,{Component} from 'react'


export default class SubmitBar extends Component {
    constructor(props) {
      super(props);
      this.onClick=this.onClick.bind(this);
    }
    onClick(event) {
      this.props.onClick(event) // 提交事件传递给父部件
    }
    render() {
      return(
        <form>
          <button type="submit" onClick={this.onClick} >{this.props.answered?'再做一遍错题':'检查'}</button> 
          {/* 根据父控件状态判断现在是检查之前还是之后，相应改变按钮文字 */}
        </form>
      )
    }
  }
  
