import { Component, OnInit } from '@angular/core';
import {ImgurApiService} from './services/imgur-api/imgur-api.service';
import {Meme} from './shared/Meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  memes: Array<Meme> = [];

  constructor(private imgurApiService: ImgurApiService) {
  }

  ngOnInit(): void {
    const promise = this.imgurApiService.getMemes();
    promise.then(response => {
      this.memes = response['data'].map((meme) => {
        return new Meme(meme.id, this.checkLink(meme), 0);
      });
      console.log(this.memes);
    });
  }

  checkLink(meme): Array<string> {
    let links: Array<string> = [];

    if (meme.images) {
      links = meme.images.map((img) => {
        return img.link;
      });
    } else {
      links = [meme.link];
    }

    return links;
  }

}
