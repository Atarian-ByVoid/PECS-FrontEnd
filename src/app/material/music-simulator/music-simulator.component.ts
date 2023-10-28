import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-music-simulator',
  templateUrl: './music-simulator.component.html',
  styleUrls: ['./music-simulator.component.css'],
})
export class MusicSimulatorComponent {
  private sound: Howl | null = null;

  playSound(soundFileName: string) {
    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [`assets/music/${soundFileName}`],
    });

    this.sound.play();
  }
}
