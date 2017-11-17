import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { GeneratedComponent } from './components/generated/generated.component';

const routes: Routes = [
  {path: '', component: PersonalComponent},
  {path: 'generated', component: GeneratedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
