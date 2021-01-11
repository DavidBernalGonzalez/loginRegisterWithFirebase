import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-loged',
  templateUrl: './loged.component.html',
  styleUrls: ['./loged.component.scss']
})
export class LogedComponent implements OnInit {

  playOrStopIcon = 'play_circle';
  background = 'sea';
  thumbLabel = 100;
  iconVolume = 'volume_up';
  oldIconVolume = '';

  @ViewChild('audioElement') audioElement!: ElementRef;
  @ViewChild('volume') volumeElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  changeIconPlay(): void{
    const audio = new Audio();
    if (this.playOrStopIcon === 'play_circle'){
      this.playOrStopIcon = 'pause_circle';
      this.audioElement.nativeElement.src = '../../../../../assets/sounds/sea.mp3';
      this.audioElement.nativeElement.play();
      console.log(this.audioElement);
    } else {
      this.playOrStopIcon = 'play_circle';
      this.audioElement.nativeElement.pause();
    }
  }

  changeIconVolume(): void{

    if (this.iconVolume !== 'volume_off'){
      this.oldIconVolume = this.iconVolume;
      console.log(this.oldIconVolume);
      this.iconVolume = 'volume_off';
      this.audioElement.nativeElement.pause();
    } else {
      this.iconVolume = this.oldIconVolume;
      if (this.playOrStopIcon === 'pause_circle'){
        this.audioElement.nativeElement.play();
      }
    }
  }

  changeVolume(value: number): void{
    this.audioElement.nativeElement.volume = this.volumeElement.nativeElement.value;
  }
  // https://stackblitz.com/edit/angular-mat-slider-full-options?embed=1&file=app/slider-configurable-example.html
  onSliderChange(event: MatSliderChange): void {
    if (event.value != null){
      console.log(event.value / 100);
      if (event.value < 50 && event.value > 10){
        this.iconVolume = 'volume_down';
      } else if (event.value < 10){
        this.iconVolume = 'volume_mute';
      } else{
        this.iconVolume = 'volume_up';
      }
      this.thumbLabel = event.value;
      this.audioElement.nativeElement.volume = event.value / 100;
    }
  }
}


