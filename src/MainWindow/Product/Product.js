import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Modal, Popconfirm, message } from 'antd';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const mockData = []

for (let i = 0; i < 105; i++) {
    mockData.push({
        id: i.toString(),
        naziv: `Proizvod ${i}`,
        duljina: `${(10 * i) + 2}`,
        sirina: `${10 * i}`,
        visina: `${10 * i + 1}`,
    });
}

const classProduct = {
    id: null,
    naziv: "",
    duljina: 0,
    sirina: 0,
    visina: 0,
}

function Product() {

    const [data, setData] = useState(mockData);
    const [visibleAddModal, setVisibleAddModal] = useState(false)
    const [visibleEditModal, setVisibleEditModal] = useState(false)
    const [currentRow, setCurrentRow] = useState(null)

    useEffect(() => {
        if (currentRow) {
            setVisibleEditModal(true)
            console.log("Current row", currentRow)
        }
    }, [currentRow]);


    const columns = [
        {
            title: 'Naziv',
            dataIndex: 'naziv',
            id: 'naziv',
            fixed: 'left',
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

            render: (text, record) =>
                data.length >= 1 ? (
                    <Space size="middle">
                        <a onClick={() => showEditModal(record)}>Uredi</a>
                        <Popconfirm title="Jeste li sigurni da želite obrisati ovaj proizvod?"
                            okText="Da"
                            cancelText="Ne"
                            onConfirm={() => handleDelete(record)}>
                            <a>Obriši</a>
                        </Popconfirm>
                    </Space>
                ) : null,

        },
    ];

    const showAddModal = () => {
        setVisibleAddModal(true)
    };

    const hideAddModal = () => {
        setVisibleAddModal(false)
    }

    const showEditModal = (record) => {
        console.log("klik", record)
        setCurrentRow(record)
    };

    const hideEditModal = () => {
        setVisibleEditModal(false)
    }

    const handleDelete = (record) => {
        console.log(record)
        setData(data.filter((item) => item.id !== record.id))

        message.info('Obrisali ste odabrani proizvod');
    };


    return (
        <div>
            <Button type="primary"
                style={{ marginBottom: 15 }}
                onClick={showAddModal}>
                Dodaj
        </Button>
            <Modal
                title="Dodaj novi proizvod"
                visible={visibleAddModal}
                onCancel={hideAddModal}
                footer={null}
            >
                <AddProduct formFinish={hideAddModal} />
            </Modal>
            <Modal
                title="Uredi proizvod"
                visible={visibleEditModal}
                onCancel={hideEditModal}
                footer={null}
            >
                <EditProduct formFinish={hideEditModal} row={currentRow} />
            </Modal>
            <Table columns={columns}
                dataSource={data}
                scroll={{ x: 750, y: 550 }}
            />
        </div>
    )
}

export default Product;