import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, message, InputNumber } from 'antd';

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

function EditProduct(props) {

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
                remember: false,
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
                initialValue = {props.row.naziv}
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
                initialValue = {props.row.duljina}
            >
                <InputNumber placeholder="Duljina(cm)"
                    id="inputDuljina"
                    min="0" />
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
                initialValue = {props.row.sirina}
            >
                <InputNumber placeholder="Širina(cm)"
                    id="inputSirina"
                    min="0" />
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
                initialValue = {props.row.visina}
            >
                <InputNumber placeholder="Visina(cm)"
                    id="inputVisina"
                    min="0" />
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

export default EditProduct;