import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from '../../services/imgur-api/imgur-api.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Meme } from '../../shared/Meme';

@Component({
  selector: 'app-meme-chooser-page',
  templateUrl: './meme-chooser-page.component.html',
  styleUrls: ['./meme-chooser-page.component.css']
})
export class MemeChooserPageComponent implements OnInit {
  memesToChoose: Array<Meme> = [];

  constructor(
    private imgurApiService: ImgurApiService,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.assignMemesToChoose();
  }

  assignMemesToChoose() {
    const pageNumber = Math.ceil(Math.random() * 2);
    const promise = this.imgurApiService.getMemes(pageNumber);
    promise.then(response => {
      const memes = response['data'].map((meme) => {
        return new Meme(meme.id, this.checkLink(meme), 0);
      });

      const memesIndexes = [];

      for (let i = 0; i < 2; i++) {
        memesIndexes.push(Math.floor(Math.random() * 60));
      }

      memesIndexes.forEach((index) => {
        this.memesToChoose.push(memes[index]);
      });
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
