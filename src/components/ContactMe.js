import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default function ContactMe() {
    const [form] = Form.useForm();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ngq6bxl', 'template_6i2c8v4', e.target, 'user_XgpNpFqOQ4uVoZv8Cw6Ot')
            .then((result) => {
                form.resetFields();
            }, (error) => {
                console.log(error.text);
            });
    }

    const onFinish = values => {
        console.log(values);
    };

    return (
        <div>
            <Form {...layout} form={form} name="nest-messages" onSubmitCapture={sendEmail} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label={"Name"} rules={[{ required: true }]}>
                    <Input name={"from_name"} placeholder={"Your Name"} />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true}]}>
                    <Input name={"user_email"} placeholder={"YourContactEmail@gmail.com"}/>
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message" rules={[{required: true}]}>
                    <Input.TextArea name={"message"} placeholder={"Your message here..."}/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}