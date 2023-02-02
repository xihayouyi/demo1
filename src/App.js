import './App.css';
import { Form, Button, Input, Modal, } from 'antd';

function App() {
  return (
    <div className="App">
      <Modal title="添加" open footer={null}>
        <Form>
          <Form.Item label="姓名" name="name" help="长度在20个字符以内" rules={[{ required: true, message: '请输入姓名' }, { max: 20 }]}>
            <Input />
          </Form.Item>
          <Form.Item label="手机号" name="phone">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="reset">重置</Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
          <div>点击”重置“按钮后，”姓名“表单的高度会发生变化</div>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
