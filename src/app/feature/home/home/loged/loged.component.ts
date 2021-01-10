import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loged',
  templateUrl: './loged.component.html',
  styleUrls: ['./loged.component.scss']
})
export class LogedComponent implements OnInit {

  playOrStopIcon = 'play_circle';
  background = 'sea';

  @ViewChild('audioElement') audioElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  changeIcon(): void{
    const audio = new Audio();
    if (this.playOrStopIcon === 'play_circle'){
      this.playOrStopIcon = 'pause_circle';
      this.audioElement.nativeElement.src = '../../../../../assets/sounds/sea.mp3';
      this.audioElement.nativeElement.play();
      console.log(this.audioElement);
    } else{
      this.playOrStopIcon = 'play_circle';
      this.audioElement.nativeElement.pause();
    }
  }
}
