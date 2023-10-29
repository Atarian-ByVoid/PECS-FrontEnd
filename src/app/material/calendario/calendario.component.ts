import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from 'fullcalendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Evento 1',
        date: '2023-10-25',
      },
      {
        title: 'Evento 2',
        date: '2023-10-26',
      },
    ],
  };

  dateClick(arg: any) {
    alert('Data clicada: ' + arg.dateStr);
  }

  eventClick(arg: any) {
    alert('Evento clicado: ' + arg.event.title);
  }

  constructor() {}

  ngOnInit(): void {}
}
