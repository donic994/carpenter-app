import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Modal } from 'antd';
import AddProduct from './AddProduct';

const mockData = []

for (let i = 0; i < 105; i++) {
    mockData.push({
        id: i.toString(),
        duljina: `${(10 * i) + 2}`,
        sirina: `${10 * i}`,
        visina: `${10 * i + 1}`,
        naziv: `Proizvod ${i}`,
    });
}

function Product() {

    const [data, setData] = useState(mockData);
    const [visibleAddModal, setVisibleAddModal] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)


    useEffect(() => {

    });


    const columns = [
        {
            title: 'Naziv',
            dataIndex: 'naziv',
            id: 'naziv',
        },
        {
            title: 'Duljina',
            dataIndex: 'duljina',
            id: 'duljina',
        },
        {
            title: 'Širina',
            dataIndex: 'sirina',
            id: 'sirina',
        },
        {
            title: 'Visina',
            dataIndex: 'visina',
            id: 'visina',
        },
        {
            title: 'Akcije',
            id: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Uredi</a>
                    <a>Briši</a>
                </Space>
            ),
        },
    ];

    const showModal = () => {
        setVisibleAddModal(true)
    };


    return (
        <div>
            <Button type="primary"
                style={{ marginBottom: 15 }}
                onClick={showModal}>
                Dodaj
        </Button>
            <Modal
                title="Dodaj novi proizvod"
                visible={visibleAddModal}
                footer={null}
            >
                <AddProduct/>
            </Modal>
            <Table columns={columns}
                dataSource={data} />
        </div>
    )
}

export default Product;