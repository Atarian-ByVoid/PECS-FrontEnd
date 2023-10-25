import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent {
  messages: string[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
