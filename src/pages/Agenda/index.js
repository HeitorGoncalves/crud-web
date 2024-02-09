import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../comp../../components/header';
import Calendario from '../../comp../../components/calendario';


const defaultTheme = createTheme();



export default function Agenda() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />

        <Header />

        <Calendario />



      </Grid>
    </ThemeProvider>
  );
}