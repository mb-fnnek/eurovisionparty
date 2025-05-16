import {Component, Input} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import {Item} from '../dragdroplist.component';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Participant} from '../service/participants.service';

@Component({
  selector: 'app-participant-card',
  imports: [
    MatCard,
    CdkDrag,
    CdkDragHandle,
    NgIf,
    MatIcon,
  ],
  templateUrl: './participant-card.component.html',
  styleUrl: './participant-card.component.css'
})
export class ParticipantCardComponent {
  @Input() data: Participant | undefined;
}
