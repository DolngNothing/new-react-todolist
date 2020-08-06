import React from "react";
import './todo.css'
import { Button, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: 'undo' }

  }

  componentDidMount() {
    this.setState({ className: this.props.value.status == true ? 'done' : 'undo' });
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.props.value.id);
  };

  doneTodo = () => {
    this.props.doneTodo(this.props.value);
    this.setState({ className: this.props.value.status == true ? 'done' : 'undo' });
  };

  render() {
    return (
      <div className="todo">
        <Row>
          <Col span={16}>
            <span onClick={this.doneTodo} id="test" className={this.state.className}>
              {this.props.value.content}
            </span>
          </Col>
          <Col span={2} offset={6}>
          <Button type="dashed" danger onClick={this.deleteTodo} ><CloseOutlined /></Button>
          </Col>
        </Row>

        
      </div>
    );
  }
}
