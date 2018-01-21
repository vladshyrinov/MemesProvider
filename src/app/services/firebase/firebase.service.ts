import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Meme } from '../../shared/Meme';


@Injectable()
export class FirebaseService {
  private selectedMemes: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getSelectedMemes() {
    this.selectedMemes = this.firebase.list('memes');
    this.selectedMemes.valueChanges().subscribe(result => {
      console.log(result);
    });
    return this.selectedMemes;
  }

  insertMeme(meme: Meme) {
    this.selectedMemes.push({
      id: meme['id'],
      imageLinks: meme['imageLinks'],
      rating: meme['rating']
    });
  }

}
