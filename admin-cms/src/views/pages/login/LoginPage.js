import React, { useState } from 'react'
import { Form, Input, Button, Card, message } from 'antd';
import './style.css'

import store from '../../../redux/store';

export default function LoginPage() {

    let [isSubmitting, setIsSubmitting] = useState(false)

    store.subscribe(() => {
        let state = store.getState()
        setIsSubmitting(state.auth.submitting)
    })

    const onFinish = (values) => {
        console.log('Success:', values);
        // submit login
        store.dispatch({type: "USER_LOGIN", payload: values})
        // redirect to home
        //window.location.href = "/"
        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // validate fail
    };
    return (
        <Card className='login-container' size="small" title="Login" extra={<a href="#">Register</a>} style={{ width: 500 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        // {
                        //     type: "email",
                        //     message: "The input is not valid E-mail"
                        // }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: (_, value) => {
                                let check = false;
                                let message = ""
                                if(value && value.length > 3){
                                    check = true;
                                } else{
                                    message = "Password must have more than 3 characters!"
                                }
                                return check ? Promise.resolve() : Promise.reject(message)
                            }
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={isSubmitting}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    );
}
