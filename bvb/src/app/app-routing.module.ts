import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DiscographiesComponent } from './discographies/discographies.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  
{path: '', component: HomeComponent},
{path: 'members', component: MembersComponent},
{path: 'Discographies', component: DiscographiesComponent},
{path: 'About', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
