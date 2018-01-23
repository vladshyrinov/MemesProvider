import { Component, OnInit, Input } from '@angular/core';
import { MemeService } from '../../services/meme/meme.service';
import { Meme } from '../../shared/Meme';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  selectedMemes: Meme[] = [];

  constructor(private memeService: MemeService) {
  }

  ngOnInit() {
    this.memeService.memesDataObservable().subscribe(memes => {
      if (memes.length) {
        memes.forEach((memeData, index) => {
          const memeJSON = memeData.payload.toJSON();
          memeJSON['$key'] = memeData.key;
          const imageLinks = Object.values(memeJSON['imageLinks']);
          memeJSON['imageLinks'] = imageLinks;
          const memeClass = this.memeService.toMeme(memeJSON);
          this.selectedMemes[index] = memeClass;
        });
      } else {
        this.memeService.assignMemesToFirebase();
        memes.forEach((memeData, index) => {
          const memeJSON = memeData.payload.toJSON();
          memeJSON['$key'] = memeData.key;
          const imageLinks = Object.values(memeJSON['imageLinks']);
          memeJSON['imageLinks'] = imageLinks;
          const memeClass = this.memeService.toMeme(memeJSON);
          this.selectedMemes[index] = memeClass;
        });
      }
      this.sortMemes(this.selectedMemes);
    });
  }

  sortMemes(memes: Meme[]) {
    memes.sort((a: Meme, b: Meme) => {
      return b.rating - a.rating;
    });
  }

  sendToMainPage(meme: Meme) {
    meme.chosenByAdmin = 1;
    this.memeService.updateMeme(meme);
  }

}
