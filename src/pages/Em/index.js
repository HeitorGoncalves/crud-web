import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Header from '../../components/header';
import Calendario from '../../components/calendario';

import Servicos from '../../components/servicos';
import Perfil from '../../components/perfil';

import Imagem from '../../assets/contemplative-reptile.jpeg'

const defaultTheme = createTheme();

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function Em() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />

        <Header />

        <Card style={{ width: '100%' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="160"
            image={Imagem}
          />
        </Card>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ backgroundColor: '#EEF2F6' }}
        >
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered={true} style={{ backgroundColor: '#FFF' }}>
            <Tab icon={<CalendarMonthIcon />} label="AGENDA" />
            <Tab icon={<WorkHistoryIcon />} label="SERVIÇOS" />
            <Tab icon={<PersonPinIcon />} label="PERFIL" />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            <Calendario />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Servicos />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Perfil />
          </CustomTabPanel>
        </Grid>



      </Grid>
    </ThemeProvider>
  );
}