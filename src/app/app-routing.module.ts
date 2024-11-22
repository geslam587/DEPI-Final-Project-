import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TrackComponent } from './Components/track/track.component';
import { CommunityComponent } from './Components/community/community.component';
import { JobOppComponent } from './Components/job-opp/job-opp.component';
import { ProProfileComponent } from './Components/pro-profile/pro-profile.component';
import { DepiPointsComponent } from './Components/depi-points/depi-points.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AuthguardService } from './services/authguard.service';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ProjectComponent } from './Components/dashboard/project/project.component';
import { QuizComponent } from './Components/dashboard/quiz/quiz.component';
import { AgendaComponent } from './Components/dashboard/agenda/agenda.component';
import { LearningComponent } from './Components/dashboard/learning/learning.component';
import { ConceptsComponent } from './Components/dashboard/concepts/concepts.component';
import { StreamingComponent } from './Components/dashboard/streaming/streaming.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'track', component:TrackComponent, canActivate: [AuthguardService] },
  { path: 'community', component:CommunityComponent, canActivate: [AuthguardService] },
  { path: 'job', component:JobOppComponent, canActivate: [AuthguardService] },
  { path: 'profile', component:ProProfileComponent, canActivate: [AuthguardService] },
  { path: 'points', component:DepiPointsComponent, canActivate: [AuthguardService] },
  { path: 'contact', component:ContactUsComponent, canActivate: [AuthguardService] },
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthguardService] },
  { path: 'home', component:HomeComponent, canActivate: [AuthguardService] },
  { path: 'agenda',component:AgendaComponent, canActivate: [AuthguardService] },
  { path: 'project', component:ProjectComponent, canActivate: [AuthguardService] },
  { path: 'quiz', component:QuizComponent, canActivate: [AuthguardService] },
  { path: 'learning', component:LearningComponent, canActivate: [AuthguardService] },
  { path: 'concepts', component:ConceptsComponent, canActivate: [AuthguardService] },
  { path: 'streaming', component:StreamingComponent, canActivate: [AuthguardService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
