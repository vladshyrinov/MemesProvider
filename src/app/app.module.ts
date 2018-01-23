import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes} from '@angular/router';

import { ImgurApiService } from './services/imgur-api/imgur-api.service';
import { MemeService } from './services/meme/meme.service';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { MemeChooserPageComponent } from './components/meme-chooser-page/meme-chooser-page.component';
import { MainMemesPageComponent } from './components/main-memes-page/main-memes-page.component';
import { MemeComponent } from './components/meme-chooser-page/meme/meme.component';

const appRoutes: Routes = [
  {path: 'admin', component: AdminPageComponent},
  {path: 'meme-chooser', component: MemeChooserPageComponent},
  {path: '**', component: MainMemesPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    MemeChooserPageComponent,
    MainMemesPageComponent,
    MemeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImgurApiService, MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
