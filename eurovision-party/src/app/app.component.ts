import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DragDroplistComponent} from './dragdroplist.component';
import {NameFormComponent} from './name-form/name-form.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DragDroplistComponent, NameFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eurovision-party';
}
