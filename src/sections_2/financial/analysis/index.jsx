import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';

export default function Index() {
    return (
        <Box
            sx={{ borderRadius: 1.2 }}>

            <Grid container spacing={2} >
                <Grid sm={6} >

                    <Card>
                        <CardHeader
                            sx={{ marginBottom: 2.5 }}
                            title="Cash Flow"
                            subheader="(+43%) than last year"
                        />
                    </Card>

                </Grid>
                <Grid sm={6} >
                    <Card>
                        <CardHeader
                            sx={{ marginBottom: 2.5 }}
                            title="Yearly "
                            subheader="(+43%) than last year"
                        />
                    </Card>
                </Grid>
                <Grid sm={6} >
                    <Card>
                        <CardHeader
                            sx={{ marginBottom: 2.5 }}
                            title="invesment "
                            subheader="(+43%) than last year"
                        />
                    </Card>
                </Grid>

                <Grid sm={6} >
                    <Card>
                        <CardHeader
                            sx={{ marginBottom: 2.5 }}
                            title="Category by details "
                            subheader="(+43%) than last year"
                        />
                    </Card>
                </Grid>
            </Grid>


        </Box>
    )
}

Index.propTypes = {
};