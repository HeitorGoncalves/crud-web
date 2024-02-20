import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import Banner from '../assets/contemplative-reptile.jpeg'
import ImgPerfil from '../assets/avatar.jpeg'


function Perfil() {

  return (
    <Grid container component="main">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        style={{ backgroundColor: '#EEF2F6' }}
      >

        <Card style={{ width: '100%', marginBottom: '20px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Banner}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Avatar
                alt="Heitor Gonçalves"
                src={ImgPerfil}
                sx={{ width: 100, height: 100 }}
                style={{ marginTop: '-70px' }}
              />
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Heitor Gonçalves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolvedor FullStack - Spring Boot(Java / Kotlin) | ReactJS
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://heitorgoncalves.github.io/</Button>
          </CardActions>
        </Card>


        <Card style={{ width: '100%', marginBottom: '20px' }}>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sobre
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

        </Card>


        <Card style={{ width: '100%', marginBottom: '20px' }}>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Contato
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="delete" size="large">
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <XIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <YouTubeIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <EmailIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>



      </Grid>
    </Grid>
  );
}

export default Perfil;