import { EventEmitter, Injectable } from '@angular/core';

interface Video {
  source: string;
  audio: string;
}
@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videoSelected = 0;

  url$ = new EventEmitter<string>(); /* Obsersable for send to the component the url source video */

  videoSources: Video[] = [
    { source: '../../../../assets/videos/sea.mp4', audio: '../../../../../assets/sounds/sea.mp3' },
    { source: '../../../../assets/videos/bird1.mp4', audio: '../../../../../assets/sounds/bird1.mp3'},
  ];

  getVideo(item: number): any {
    try{
      if (this.videoSources.length > 0 && this.videoSources[item].source !== '') {
        this.videoSelected = item;
        return this.videoSources[item].source;
      }
      throw new Error('Video ' + item + ' source not found');
    } catch (err) {
      console.error('Video source error', err);
    }
  }

  getAudio(item: number): any {
    try{
      if (this.videoSources.length > 0 && this.videoSources[item].audio !== '') {
        return this.videoSources[item].audio;
      }
      throw new Error('Audio ' + item + ' source not found');
    } catch (err) {
      console.error('Audio source error', err);
    }
  }

  disableBtnRight(): boolean{
    const videosSourcesLength = this.videoSources.length - 1;

    if (videosSourcesLength === this.videoSelected){
      return false;
    } else{
      return true;
    }
  }

  disableBtnLeft(): boolean{
    const videosSourcesLength = this.videoSources.length - 1;

    if (this.videoSelected === 0){
      return false;
    } else{
      return true;
    }
  }

  constructor() {}
}
