import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        id: i.toString(),
        duljina: `${(10 * i) + 2}`,
        sirina: `${10 * i}`,
        visina: `${10 * i + 1}`,
        naziv: `Proizvod ${i}`,
    });
}


const columns = [
    {
        title: 'Šifra',
        dataIndex: 'id',
        id: 'id',
    },
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
                <a>Novi</a>
                <a>Uredi</a>
                <a>Briši</a>
            </Space>
        ),
    },
];


function Product() {
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default Product;