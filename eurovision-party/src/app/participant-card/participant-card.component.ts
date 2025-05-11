import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-participant-card',
  imports: [
    MatCard,
    CdkDrag,
    CdkDragHandle
  ],
  templateUrl: './participant-card.component.html',
  styleUrl: './participant-card.component.css'
})
export class ParticipantCardComponent {

}
