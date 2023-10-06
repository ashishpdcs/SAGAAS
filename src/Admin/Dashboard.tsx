import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2',
        },
        background: {
            default: '#f0f0f0',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const data = [
    { name: 'Category 1', value: 25 },
    { name: 'Category 2', value: 40 },
    { name: 'Category 3', value: 30 },
    { name: 'Category 4', value: 55 },
    { name: 'Category 5', value: 20 },
];

const Dashboard = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-md-6 mb-4'>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Dynamic Swith Code
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            The switch provides functionality where the user can change the settings between on and off using the switch.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            DCS
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            The switch provides functionality where the user can change the settings between on and off using the switch.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <ThemeProvider theme={theme}>
                        <div className="App">
                            <ResponsiveContainer height={300}>
                                <BarChart
                                    data={data}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <YAxis />
                                    <Legend />
                                    <Bar dataKey="value" fill={theme.palette.primary.main} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ThemeProvider>
                </div>
                <div className="col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://fastly.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard