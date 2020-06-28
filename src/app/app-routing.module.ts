import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraComponent } from './prateleira/prateleira.component';


const routes: Routes = [
  { path: 'prateleira', component: PrateleiraComponent },
  { path: '', redirectTo: 'prateleira', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
