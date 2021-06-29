import React from 'react'
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export default function App() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant='h6'>Photo Ablum</Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.maindb}>
                <div className={classes.div1}>
                    <Container maxWidth='sm' style={{ }}>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                         </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae fugiat tempora consectetur tempore, maiores s
                         </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                     </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                     </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md" style={{ marginTop: '20px' }}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                         </Typography>
                                        <Typography >
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                         </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    codeinsky.com
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Copyright &copy; DBmunda
                </Typography>
            </footer>
        </>
    )
}
