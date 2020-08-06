import React from "react";
import { Button , Input,Space} from 'antd';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  addTodo = (event) => {
    this.props.addTodo('1',this.state.value);
  };

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Space style={{marginTop:'10px'}}>
        <Input id="value" type="text" onChange={this.changeValue} />
        <Button onClick={this.addTodo}>ADD</Button>
      </Space>
    );
  }
}

export default TodoForm;
