import { Component, OnInit } from '@angular/core';
import { Meme } from './shared/Meme';
import { MemeService } from './services/meme/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private memeService: MemeService
  ) {
  }

  ngOnInit() {
    // console.log(this.memeService.memesDataInitialization());
  }

}
