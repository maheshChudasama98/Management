import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { grey } from 'src/theme/palette';

import SvgColor from 'src/components/svg-color';

import { Tabs } from 'antd';

import Partys from './partys/index';
import Lables from './lables/index';
import Setting from './setting/index';
import Analysis from './analysis/index';
import Accounts from './accounts/index';
import Category from './category/index';
import Templete from './templete/index';
import Transaction from './transaction/index';


export default function Index() {

    const tabs = [
        { label: 'Analysis', key: 1, children: <Analysis />, },
        { label: 'Transaction', key: 2, children: <Transaction />, },
        { label: 'Accounts', key: 3, children: <Accounts />, },
        { label: 'Partys', key: 4, children: <Partys />, },
        { label: 'Category', key: 7, children: <Category />, },
        { label: 'Lables', key: 5, children: <Lables />, },
        { label: 'Templete', key: 6, children: <Templete />, },
        { label: 'Setting', key: 8, children: <Setting />, },
    ]

    return (
        <>
            <Box
                sx={{
                    borderRadius: 1.2,
                    // bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    border: (theme) => `dashed 1px #bad0e7   `,
                }}>

                <Grid container spacing={2} sx={{ margin: 0.5 }} >
                    <Grid sm={3}>
                        <Card>
                            <CardHeader
                                sx={{ marginBottom: 1.8 }}
                                // avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe"> CA </Avatar>}
                                title="Total active users"
                                action={<Typography variant="h4"> 5,765</Typography>}
                                subheader={
                                    <Typography variant="body2"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            // justifyContent: 'center',
                                        }}>
                                        <SvgColor src="/assets/icons/general/ic_arrow_up.svg"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: (theme) => `${theme.palette.success.main}`
                                            }} />
                                        -2.6% last 7 days
                                    </Typography>
                                }
                            />
                        </Card>
                    </Grid>

                    <Grid sm={3}>
                        <Card>
                            <CardHeader
                                sx={{ marginBottom: 1.8 }}
                                // avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe"> CA </Avatar>}
                                title="Total active users"
                                action={<Typography variant="h4"> 5,765</Typography>}
                                subheader={
                                    <Typography variant="body2"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            // justifyContent: 'center',
                                        }}>
                                        <SvgColor src="/assets/icons/general/ic_arrow_down.svg"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: (theme) => `${theme.palette.error.main}`
                                            }} />
                                        -2.6% last 7 days
                                    </Typography>
                                }
                            />
                        </Card>
                    </Grid>

                    <Grid sm={3}>
                        <Card>
                            <CardHeader
                                sx={{ marginBottom: 1.8 }}
                                // avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe"> CA </Avatar>}
                                title="Total active users"
                                action={<Typography variant="h4"> 5,765</Typography>}
                                subheader={
                                    <Typography variant="body2"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            // justifyContent: 'center',
                                        }}>
                                        <SvgColor src="/assets/icons/general/ic_arrow_up.svg"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: (theme) => `${theme.palette.success.main}`
                                            }} />
                                        -2.6% last 7 days
                                    </Typography>
                                }
                            />
                        </Card>
                    </Grid>

                    <Grid sm={3}>
                        <Card>
                            <CardHeader
                                sx={{ marginBottom: 1.8 }}
                                // avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe"> CA </Avatar>}
                                title="Total active users"
                                action={<Typography variant="h4"> 5,765</Typography>}
                                subheader={
                                    <Typography variant="body2"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            // justifyContent: 'center',
                                        }}>
                                        <SvgColor src="/assets/icons/general/ic_arrow_up.svg"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: (theme) => `${theme.palette.success.main}`
                                            }} />
                                        -2.6% last 7 days
                                    </Typography>
                                }
                            />
                        </Card>
                    </Grid>

                </Grid>

                {/* <Grid container spacing={2} sx={{ margin: 0.5 }} >
                <Grid sm={2}>
                    <Card>
                        <CardHeader
                         sx={{ marginBottom :2.5}}
                            title="Income"
                            action={<Typography variant="h5"> 5,765</Typography>}
                        /> 
                    </Card>
                </Grid>

                <Grid sm={2}>
                    <Card>
                        <CardHeader
                         sx={{ marginBottom :2.5}}
                            title="expense"
                            action={<Typography variant="h5"> 5,765</Typography>}
                        /> 
                    </Card>
                </Grid>

                <Grid sm={2}>
                    <Card>
                        <CardHeader
                         sx={{ marginBottom :2.5}}
                            title="Investment"
                            action={<Typography variant="h5"> 5,765</Typography>}
                        /> 
                    </Card>
                </Grid>

                <Grid sm={2}>
                    <Card>
                        <CardHeader
                         sx={{ marginBottom :2.5}}
                            title="Credit"
                            action={<Typography variant="h5"> 5,765</Typography>}
                        /> 
                    </Card>
                </Grid>
                <Grid sm={2}>
                    <Card>
                        <CardHeader
                         sx={{ marginBottom :2.5}}
                            title="Debit"
                            action={<Typography variant="h5"> 5,765</Typography>}
                        /> 
                    </Card>
                </Grid>
                
            </Grid> */}

            </Box>
            <Box sx={{
                borderRadius: 1.3,
                marginTop: 2,
                paddingY: 2,
                paddingX: 2,
                bgcolor: grey[300],
            }}>
                <Tabs
                    size='large'
                    defaultActiveKey={1}
                    items={tabs} />
            </Box>
        </>
    )
}

Index.propTypes = {
};