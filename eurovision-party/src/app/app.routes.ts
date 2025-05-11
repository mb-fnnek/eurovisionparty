import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameFormComponent } from './name-form/name-form.component';
import { DragDroplistComponent } from './dragdroplist.component';
import {ResultsComponent} from './results/results.component';

export const routes: Routes = [
  { path: 'start', component: NameFormComponent },
  { path: 'vote/:name', component: DragDroplistComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: 'start' } // opcjonalne: przekierowanie na /start, jeśli ścieżka nie istnieje
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
