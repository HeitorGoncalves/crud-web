import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Banner from '../assets/contemplative-reptile.jpeg'


function Servicos() {

  return (
    <Grid container component="main" spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}

        style={{ backgroundColor: '#EEF2F6' }}
      >

        <Card style={{ width: '100%' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Banner}
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              R$ 150,00 / hora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolver Backend - Spring Boot(Java / Kotlin)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Marcar</Button>
          </CardActions>
        </Card>
      </Grid>


      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{ backgroundColor: '#EEF2F6' }}
      >

        <Card style={{ width: '100%' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Banner}
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              R$ 200,00 / hora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolver FullStack - Spring Boot(Java / Kotlin) e ReactJS
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Marcar</Button>
          </CardActions>
        </Card>
      </Grid>


      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{ backgroundColor: '#EEF2F6' }}
      >

        <Card style={{ width: '100%' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Banner}
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              R$ 100,00 / hora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolver Frontend - ReactJS
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Marcar</Button>
          </CardActions>
        </Card>
      </Grid>



    </Grid>
  );
}

export default Servicos;