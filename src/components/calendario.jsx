import * as React from 'react';
import Grid from '@mui/material/Grid';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';

const initialDate = new Date();
const events = [
  {
    title: 'event 1',
    start: '2024-02-13T01:00:00',
    end: '2024-02-13T02:00:00',
    url: 'https://google.com/',
    backgroundColor: 'red',
    textColor: 'white',
    borderColor: 'red'
  },
  {
    title: 'event 1.2',
    start: '2024-02-13T01:00:00',
    end: '2024-02-13T02:00:00',
    // url: 'https://google.com/',
    backgroundColor: 'green',
    textColor: 'white',
    borderColor: 'green'
  },
  {
    title: 'event 1.2',
    start: '2024-02-14T02:00:00',
    end: '2024-02-14T03:00:00',
    // url: 'https://google.com/',
    backgroundColor: 'yellow',
    textColor: 'black',
    borderColor: 'yellow'
  },
  {
    title: 'event 2',
    start: '2024-02-16T01:00:00',
    end: '2024-02-16T02:00:00',
    // url: 'https://google.com/',
    backgroundColor: 'green',
    textColor: 'white',
    borderColor: 'green'
  },
  {
    title: 'event 3',
    start: '2024-02-17T04:00:00',
    end: '2024-02-17T05:00:00',
    // url: 'https://google.com/',
    backgroundColor: 'blue',
    textColor: 'white',
    borderColor: 'blue'
  },
]

export default function Calendario({ eventContent }) {
  const [open, setOpen] = React.useState(false);
  const [dataHora, setDataHora] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateClick = (arg) => { // bind with an arrow function
    // alert(arg.dateStr)
    setDataHora(arg.dateStr)
    setOpen(true);
  }

  const currencies = [
    {
      value: 1,
      label: 'Desenvolvimento FullStack',
    },
    {
      value: 2,
      label: 'Desenvolvimento Backend',
    },
    {
      value: 3,
      label: 'Desenvolviemnto Frontend',
    },

  ];

  return (
    <>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        style={{ backgroundColor: '#FFF', borderRadius: '10px' }}
      >

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            Agendar Horário
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    id="servico"
                    name="servico"
                    select
                    label="Serviço"
                    defaultValue="1"
                    fullWidth
                  // helperText="Please select your currency"
                  >

                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="dataHora"
                    name="dataHora"
                    label="Data e Horário"
                    type="text"
                    value={dataHora}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="mensagem"
                    name="mensagem"
                    label="Mensagem"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </div>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} variant="contained" color="error">
              CANCELAR
          </Button>
            <Button onClick={handleClose} autoFocus variant="contained" color="success">
              AGENDAR
          </Button>
          </DialogActions>
        </Dialog>


        <FullCalendar
          locale="pt-br"
          timeZone="America/Sao_Paulo"
          changeView='timeGridWeek'
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          themeSystem="Litera"
          headerToolbar={{
            left: 'title',
            center: 'dayGridMonth,timeGridWeek,timeGridDay',
            right: 'today,prev,next'
          }}
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia'
          }}
          dateClick={handleDateClick}
          initialView='timeGridWeek'
          initialDate={initialDate}
          scrollTime={0}
          events={events}
          eventContent={eventContent}
          displayEventEnd="true"
        />
      </Grid >

    </>
  );



  const eventClick = (info) => {
    info.jsEvent.preventDefault(); // don't let the browser navigate

    if (info.event.url) {
      window.open(info.event.url);
    }
  }
}

