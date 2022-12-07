import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
    AppCurrentVisits,
    AppWebsiteVisits,
    AppWidgetSummary,
} from '../components/dashboard/app';
import Tables from '../components/table/table';

export default function DashboardAppPage() {
    const theme = useTheme();

    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5, mt: 5 }}>
                    VR Della Infotech  Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Weekly Sales" paragraph="$15,000" total={714000} icon={'ant-design:android-filled'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Weekly Orders" paragraph="45,907" total={1352831} color="info" icon={'ant-design:android-filled'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Weekly Visitors" paragraph="20,0000" total={1723315} color="warning" icon={'ant-design:android-filled'} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits
                            title="Website Visits"
                            subheader="(+25%) than last year"
                            chartLabels={[
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
                            ]}
                            chartData={[
                                {
                                    name: 'Team Alpha1',
                                    type: 'column',
                                    fill: 'solid',
                                    data: [11, 56, 89, 17, 34, 77, 22, 30, 19, 20, 21],
                                },
                                {
                                    name: 'Team Alpha2',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: [11, 50, 20, 70, 30, 90, 27, 99, 34, 90, 22],
                                },
                                {
                                    name: 'Team Alpha3',
                                    type: 'line',
                                    fill: 'solid',
                                    data: [17, 40, 26, 60, 25, 80, 35, 49, 10, 45,22],
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits
                            title="Current Visits"
                            chartData={[
                                { label: 'America', value: 5874 },
                                { label: 'Asia', value: 4589 },
                                { label: 'Europe', value: 2190 },
                                { label: 'Africa', value: 3590 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <Tables />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
