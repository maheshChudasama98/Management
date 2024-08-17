import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { grey, green } from 'src/theme/palette';

import { Tabs, Table, Switch } from 'antd';

export default function Index() {

    const columns = [
        {
            title: <Typography variant="h6">Information</Typography>,
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            render: (text) => <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 52, height: 52, bgcolor: grey[500] }}>{text}</Avatar>
                <Box>
                    <Typography variant="h6">Start Amount</Typography>
                    <Typography variant="body2">Registration :- 29-09-2023 </Typography>
                </Box>
            </Stack>
        },
        {
            title: <Typography variant="h6">Type</Typography>,
            dataIndex: 'Type',
            key: 'Type',
            sorter: true,
            render: (text) => <Typography variant="body1" sx={{}}>Cash</Typography>
        },
        {
            title: <Typography variant="h6">Start Amount</Typography>,
            dataIndex: 'age',
            key: 'age',
            align: 'right',
            sorter: true,
            render: (text) => <Typography variant="body1" sx={{ textAlignLast: "right" }}>1,05,765/-</Typography>

        },
        {
            title: <Typography variant="h6">Current Amount</Typography>,
            dataIndex: 'address',
            key: 'address',
            sorter: true,
            align: 'right',
            render: (text) => <Typography variant="body1" sx={{ textAlignLast: "right" }}>1,05,765/-</Typography>
        },
        {
            title: <Typography variant="h6">Active</Typography>,
            dataIndex: 'active',
            key: 'active',
            sorter: true,
            render: (text) =>
                <Switch
                    checkedChildren="Active"
                    unCheckedChildren="Deactive"
                    defaultChecked
                />
        },
        // Table.EXPAND_COLUMN,
    ];

    const data = [
        {
            key: 1,
            name: 'JB',
            age: 32,
            address: 'New York No. 1 Lake Park',
            active: false,
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            name: 'JG',
            age: 42,
            address: 'London No. 1 Lake Park',
            active: true,
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            name: 'NE',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            active: false,
            description: 'This not expandable',
        },
        {
            key: 4,
            name: 'JB',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            active: true,
            description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
    ];


    return (
        <Box sx={{ borderRadius: 1.2 }}>
            <Card>
                <CardHeader
                    sx={{ marginBottom: 1.8 }}
                    action={
                        <Button
                            variant="contained" style={{ backgroundColor: green[100] }}>New Accouts </Button>
                    }
                />
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: (record) => (
                            <ActiveTabs record={record} />
                        ),
                    }}
                    dataSource={data}
                    pagination={false}
                />
            </Card>
        </Box>
    )
}

Index.propTypes = {
};


function ActiveTabs(record) {

    const tabs = [
        { label: 'Information', key: 1, children: "Information", },
        { label: 'History', key: 2, children: "History", },
        { label: 'Graph', key: 3, children: "Graph", },
    ]

    return (
        <Tabs
            defaultActiveKey={1}
            items={tabs} />
    )
}

ActiveTabs.propTypes = {
};