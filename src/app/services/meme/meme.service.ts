import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Meme } from '../../shared/Meme';
import { ImgurApiService } from '../imgur-api/imgur-api.service';
import { AngularFireAction } from 'angularfire2/database';
import { DatabaseSnapshot } from 'angularfire2/database/interfaces';


@Injectable()
export class MemeService {
  selectedMemesList: AngularFireList<any>;
  selectedMeme: Meme = new Meme();
  selectedMemes: Meme[] = [];

  constructor(private firebase: AngularFireDatabase, private imgurApiService: ImgurApiService) { }

  getSelectedMemes() {
    this.selectedMemesList = this.firebase.list('memes');
    return this.selectedMemesList;
  }

  insertMeme(meme: Meme) {
    this.selectedMemesList.push({
      id: meme.id,
      imageLinks: meme.imageLinks,
      rating: meme.rating,
      chosenByAdmin: meme.chosenByAdmin
    });
  }

  updateMeme(meme: Meme) {
    this.selectedMemesList.update(meme.$key, {
      id: meme.id,
      imageLinks: meme.imageLinks,
      rating: meme.rating,
      chosenByAdmin: meme.chosenByAdmin
    });
  }

  toMeme(data: any) {
    const meme = new Meme();
    meme['$key'] = data['$key'];
    meme.id = data.id;
    meme.chosenByAdmin = data.chosenByAdmin;
    meme.imageLinks = data.imageLinks;
    meme.rating = data.rating;
    return meme;
  }

  memesDataObservable() {
    const memesList = this.getSelectedMemes();
    return memesList.snapshotChanges();
  }

  assignMemesToFirebase() {
    const pageNumber = Math.ceil(Math.random() * 3);
    const promise = this.imgurApiService.getMemes(pageNumber);
    promise.then(response => {
      const memes = response['data'].map((meme) => {
        const inMeme = new Meme();
        inMeme.id = meme.id;
        inMeme.rating = 0;
        inMeme.chosenByAdmin = 0;
        inMeme.imageLinks = this.assignLinksToMeme(meme);
        return inMeme;
      });

      memes.forEach(meme => {
        this.insertMeme(meme);
      });
    });
  }

  assignLinksToMeme(meme): Array<string> {
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
