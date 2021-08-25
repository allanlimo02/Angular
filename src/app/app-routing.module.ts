import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDescriptionComponent}  from './goal-description/goal-description.component'


const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path: 'goals/:id', component: GoalDescriptionComponent },
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"}
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
