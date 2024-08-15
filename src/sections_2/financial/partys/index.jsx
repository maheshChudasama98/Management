import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

export default function Index() {
    return (
        <Box
            sx={{
                borderRadius: 1.2,
            }}>

            <Card>
                <CardHeader
                    sx={{ marginBottom: 2.5 }}
                    title="Partys"
                    subheader="coming soon ..."
                />
            </Card>

        </Box>
    )
}

Index.propTypes = {
};