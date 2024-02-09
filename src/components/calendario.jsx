import React from 'react'
import Grid from '@mui/material/Grid';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import interactionPlugin from '@fullcalendar/interaction'

const initialDate = '2024-02-06'
const events = [
  {
    title: 'event 1',
    start: '2024-02-06T01:00:00',
    end: '2024-02-06T02:00:00'
  },
  {
    title: 'event 1.2',
    start: '2024-02-06T02:00:00',
    end: '2024-02-06T03:00:00'
  },
  {
    title: 'event 2',
    start: '2024-02-07T01:00:00',
    end: '2024-02-07T02:00:00'
  },
]



const Calendario = ({ initialView, eventContent }) => (
  <Grid
    item
    xs={12}
    sm={12}
    md={12}
    style={{ backgroundColor: '#FFF' }}
  >
    <FullCalendar
      locale="pt-br"
      timeZone="America/Sao_Paulo"
      changeView='agendaWeek'
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      themeSystem="litera"
      headerToolbar={{
        left: 'title',
        center: 'dayGridMonth,timeGridWeek,timeGridDay',
        right: 'today,prev,next'
      }}
      dateClick={handleDateClick}
      initialView={initialView}
      initialDate={initialDate}
      scrollTime={0}
      events={events}
      eventContent={eventContent}
      displayEventEnd="true"

    />
  </Grid >


)
const handleDateClick = (arg) => { // bind with an arrow function
  alert(arg.dateStr)
}


export default Calendario