import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ImgurApiService} from './services/imgur-api/imgur-api.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImgurApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
