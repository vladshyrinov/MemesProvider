import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImgurApiComponentComponent } from './imgur-api-component/imgur-api-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgurApiComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
