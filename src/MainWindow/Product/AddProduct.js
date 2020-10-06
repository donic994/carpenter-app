import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, message } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function AddProduct(props) {

    const successMessage = () => {
        message.success('Dodali ste novi proizvod');
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        successMessage()
        props.formFinish()

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Naziv"
                name="naziv"
                rules={[
                    {
                        required: true,
                        message: 'Unesite naziv proizvoda!',
                    },
                ]}
            >
                <Input placeholder="Naziv proizvoda" id="inputNaziv" />
            </Form.Item>

            <Form.Item
                label="Duljina"
                name="duljina"
                rules={[
                    {
                        required: true,
                        message: 'Unesite duljinu proizvoda!',
                    },
                ]}
            >
                <Input placeholder="Duljina proizvoda" id="inputDuljina" />
            </Form.Item>

            <Form.Item
                label="Širina"
                name="sirina"
                rules={[
                    {
                        required: true,
                        message: 'Unesite širinu proizvoda!',
                    },
                ]}
            >
                <Input placeholder="Širina proizvoda" id="inputSirina" />
            </Form.Item>

            <Form.Item
                label="Visina"
                name="visina"
                rules={[
                    {
                        required: true,
                        message: 'Unesite visinu proizvoda!',
                    },
                ]}
            >
                <Input placeholder="Visina proizvoda" id="inputVisina" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary"
                    htmlType="submit">
                    Dodaj
        </Button>
            </Form.Item>

        </Form>
    );
}

export default AddProduct;