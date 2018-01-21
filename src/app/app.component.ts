import { Component, OnInit } from '@angular/core';
import { ImgurApiService } from './services/imgur-api/imgur-api.service';
import { FirebaseService } from './services/firebase/firebase.service';
import { Meme } from './shared/Meme';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  memes: AngularFireList<Meme>;

  constructor(
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit(): void {
    // const meme = new Meme('sad', ['123'], 4);
    // this.firebaseService.getSelectedMemes();
    // this.firebaseService.insertMeme(meme);
  }

}
