import { Component, OnInit } from '@angular/core';
import { MemeService } from '../../services/meme/meme.service';
import { Meme } from '../../shared/Meme';

@Component({
  selector: 'app-main-memes-page',
  templateUrl: './main-memes-page.component.html',
  styleUrls: ['./main-memes-page.component.css']
})
export class MainMemesPageComponent implements OnInit {
  selectedMemes: Meme[] = [];
  memesToShow: Meme[] = [];

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
      this.memesToShow = this.getMemesToShow(this.selectedMemes);
    });
  }

  getMemesToShow(memes: Meme[]) {
    const memesToShow = memes.filter((meme) => {
      return meme.chosenByAdmin === 1;
    });
    return memesToShow;
  }

}
