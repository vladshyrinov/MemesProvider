import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Meme } from '../../shared/Meme';

@Injectable()
export class ImgurApiService {
  private memesUrl = 'https://api.imgur.com/3/g/memes/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID 6dea1753296ad3c'})
  };


  constructor (private http: HttpClient) {
  }

  getMemes(pageNumber): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.memesUrl + pageNumber, this.httpOptions)
        .toPromise()
        .then(
          response => {
            resolve(response);
          }
        )
        .catch(
          error => {
            reject('imgur-api-error');
          }
        );
    });
    return promise;
  }
}

