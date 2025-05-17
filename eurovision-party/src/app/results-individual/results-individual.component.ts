import { Component } from '@angular/core';
import {ParticipantCardComponent} from '../participant-card/participant-card.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Participant, ParticipantsService} from '../service/participants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-results-individual',
  imports: [
    ParticipantCardComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './results-individual.component.html',
  styleUrl: './results-individual.component.css',
  standalone: true,
})
export class ResultsIndividualComponent {
  constructor(private participantsService: ParticipantsService, private route: ActivatedRoute) { }
  results! : Participant[];
  user_id!: string;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.user_id = params.get('id')!
      this.participantsService.getResultsIndividual(this.user_id).subscribe(data => {
        console.log("sur" + this.user_id);
        this.results = data;
        console.log(data);
      });
    });
  }
}
