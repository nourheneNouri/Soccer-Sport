import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { LogoComponent } from './component/logo/logo.component';
import { ItemsComponent } from './component/items/items.component';
import { BlogComponent } from './component/blog/blog.component';
import { VideosComponent } from './component/videos/videos.component';
import { ResultsComponent } from './component/results/results.component';
import { NewsComponent } from './component/news/news.component';
import { WordCapComponent } from './component/word-cap/word-cap.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { AddMatchComponent } from './component/add-match/add-match.component';

import { MatchesComponent } from './component/matches/matches.component';
import { MatchComponent } from './component/match/match.component';
import { AdminComponent } from './component/admin/admin.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserComponent } from './component/user/user.component';
import { AdminPlayersComponent } from './component/admin-players/admin-players.component';
import { AdminMatchesComponent } from './component/admin-matches/admin-matches.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { SearchComponent } from './component/search/search.component';
import { StadiumComponent } from './component/stadium/stadium.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { EditStadiumComponent } from './component/edit-stadium/edit-stadium.component';
import { DisplayStadiumComponent } from './component/display-stadium/display-stadium.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    LogoComponent,
    ItemsComponent,
    BlogComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WordCapComponent,
    BlogPageComponent,
    MatchesComponent,
    MatchComponent,
    AdminComponent,
    PlayersComponent,
    PlayerComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AdminPlayersComponent,
    AdminMatchesComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent,
    EditUserComponent,
    DisplayUserComponent,
    EditPlayerComponent,
    DisplayPlayerComponent,
    EditStadiumComponent,
    DisplayStadiumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    FormsModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
