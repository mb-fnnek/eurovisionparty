import { Component } from '@angular/core';
import {ParticipantCardComponent} from '../participant-card/participant-card.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Participant, ParticipantsService} from '../service/participants.service';

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
  constructor(private participantsService: ParticipantsService) { }
  results! : Participant[];
  leftColumn!: Participant[];
  rightColumn!: Participant[];
  ngOnInit() {
    this.results = [];

    this.participantsService.getResults().subscribe(data => {
      this.results = data;
      this.leftColumn = this.results.slice(0, 13);
      this.rightColumn = this.results.slice(13, 26);
    });
  }


}
