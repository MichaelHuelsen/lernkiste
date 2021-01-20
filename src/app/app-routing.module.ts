import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ErrorComponent } from './error/error.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';

const routes: Routes = [
  { path: 'multiplication', component: MultiplicationComponent },
  { path: 'addition', component: AdditionComponent },
  { path: '**', component: ErrorComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
