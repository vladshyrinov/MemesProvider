import { Component, OnInit } from '@angular/core';
import { MemeService } from '../../services/meme/meme.service';
import { Meme } from '../../shared/Meme';

@Component({
  selector: 'app-meme-chooser-page',
  templateUrl: './meme-chooser-page.component.html',
  styleUrls: ['./meme-chooser-page.component.css']
})
export class MemeChooserPageComponent implements OnInit {
  memesToChoose: Meme[] = [];
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
      this.assignMemesToChoose(this.selectedMemes);
    });
  }

  onChooseMeme(meme: Meme) {
    if (!meme.$key) {
      this.memeService.insertMeme(meme);
    } else {
      meme.rating++;
      this.memeService.updateMeme(meme);
    }
    this.assignMemesToChoose(this.selectedMemes);
  }

  assignMemesToChoose(memes) {
    this.memesToChoose = [];
    const memesIndexes = [];

    for (let i = 0; i < 2; i++) {
      memesIndexes.push(Math.floor(Math.random() * 50));
    }

    memesIndexes.forEach((index) => {
      this.memesToChoose.push(memes[index]);
    });
  }


}
