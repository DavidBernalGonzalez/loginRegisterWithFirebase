import { Observer, Subscription } from 'rxjs';
import { VideoService } from './../../../shared/services/video.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  videoUrl = this.videoService.getVideo(0);
  constructor(public videoService: VideoService) {}
  @ViewChild('video') videoElement!: ElementRef;
  observable!: Subscription;
  ngOnInit(): void {
    this.observable = this.observable = this.videoService.url$.subscribe((observer: Observer<string>) => {
      this.videoUrl = observer;
      this.videoElement.nativeElement.src = observer;
      // alert('observable ' +  this.videoUrl);
    });
  }

  ngOnDestroy(): void{
    this.observable.unsubscribe();
  }
}
