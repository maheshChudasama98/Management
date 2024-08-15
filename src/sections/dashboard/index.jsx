
// import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import { Box,  Card, Container, CardHeader, } from '@mui/material';

import AppWebsiteVisits from '../overview/app-website-visits';

// ----------------------------------------------------------------------

export default function Dashboard() {

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container spacing={2} >
        <Grid xs={12} sm={6} md={8}>
          <AppWebsiteVisits
            title="Base on 2024"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Income',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Expense',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Investment ',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>

          <Card>
            <CardHeader title="title" subheader="subheader" />
            <Box sx={{ p: 3, pb: 1 }}>
              div
            </Box>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}
