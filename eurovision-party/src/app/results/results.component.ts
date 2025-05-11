import { Component } from '@angular/core';
import {ParticipantCardComponent} from '../participant-card/participant-card.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [
    ParticipantCardComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  leftColumn = Array.from({ length: 13 });
  rightColumn = Array.from({ length: 13 });
}
