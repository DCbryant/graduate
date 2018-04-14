import React from 'react'
import { AutoComplete, Input ,Button} from 'antd';
const { TextArea } = Input;

function onSelect(value) {
  console.log('onSelect', value);
}

export default class Guidence extends React.Component{
    state = {
        dataSource: [],
      }
    
      handleSearch = (value) => {
        this.setState({
          dataSource: !value ? [] : [
            value,
            value + value,
            value + value + value,
          ],
        });
      }
    
      handleKeyPress = (ev) => {
        console.log('handleKeyPress', ev);
      }

    render(){
        const { dataSource } = this.state;
        return (
          <div>
                <h2>你的疑问</h2>
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: '80%' }}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                >
                    <TextArea
                    placeholder="input here"
                    className="custom"
                    style={{ height: 200 }}
                    onKeyPress={this.handleKeyPress}
                    />
                </AutoComplete>
                <h2>你的邮箱</h2>
                <Input style={{ width: '80%' }} />

                <div>
                    <Button>提交</Button>
                    <Button>取消</Button>
                </div>
          </div>
        );
      }
    
}