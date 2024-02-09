import * as React from 'react';
import Grid from '@mui/material/Grid';





function Carousel() {

  return (
    <Grid container component="main">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
      />
    </Grid>
  );
}

export default Carousel;