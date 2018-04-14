import React,{Component} from 'react'
import { Table, Icon, Divider } from 'antd'


  
  const dataSource = [{
    key: '1',
    office:'中心党总支书记中心主任',
    name: '胡彦斌',
    phoneNum: '029-88430378',
    address: '长江大学金工实习基地'
  }, {
    key: '2',
    office:'中心副主任',
    name: '胡歌',
    phoneNum: '029-88430375',
    address: '长江大学金工实习基地'
  },{
    key: '3',
    office:'办公室副主任',
    name: '张三',
    phoneNum: '029-88430378',
    address: '长江大学金工实习基地'
  }, {
    key: '4',
    office:'设备档案室',
    name: '李四',
    phoneNum: '029-88430375',
    address: '长江大学金工实习基地'
  }];
  
  const columns = [{
    title: '办公室名称',
    dataIndex: 'office',
    key: 'office',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '联系电话',
    dataIndex: 'phoneNum',
    key: 'phoneNum',
  },{
    title: '办公地址',
    dataIndex: 'address',
    key: 'address',
  }];

class Contact extends Component{
    render(){
        return(
            <div style={{marginTop:30}}>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

export default Contact