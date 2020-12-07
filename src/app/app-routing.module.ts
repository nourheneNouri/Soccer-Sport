import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';

import { AdminComponent } from './component/admin/admin.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { ContactComponent } from './component/contact/contact.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { DisplayStadiumComponent } from './component/display-stadium/display-stadium.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditStadiumComponent } from './component/edit-stadium/edit-stadium.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayerComponent } from './component/player/player.component';
import { PlayersComponent } from './component/players/players.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  //localhost:4200/contact => afficher
  //contact component
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'add-player', component: AddPlayerComponent},
  { path: 'edit-match/:id', component: EditMatchComponent},
  { path: 'edit-player/:id', component: EditPlayerComponent},
  { path: 'edit-stadium/:id', component: EditStadiumComponent},
 { path: 'edit-user/:id', component: EditUserComponent},
  { path: 'add-stadium', component: AddStadiumComponent},
  { path: 'display-user/:id', component: DisplayUserComponent},
  { path: 'display-player/:id', component: DisplayPlayerComponent},
  { path: 'display-stadium/:id', component: DisplayStadiumComponent},
  { path: 'display-match/:id', component: DisplayMatchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
