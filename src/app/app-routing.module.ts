import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowroomComponent } from '../app/showroom/showroom.component';
import { WellcomeComponent } from '../app/wellcome/wellcome.component';

const routes: Routes = [
  { path: 'showroom', component: ShowroomComponent },
  { path: 'wellcome', component: WellcomeComponent },
  { path: '', redirectTo:'/wellcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
