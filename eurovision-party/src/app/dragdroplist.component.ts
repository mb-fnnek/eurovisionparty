import {Component, inject} from '@angular/core';
import { ParticipantsService, Participant } from './service/participants.service';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {ParticipantCardComponent} from './participant-card/participant-card.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

export class Item {
  name: string;
  points: number;

  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'drag-drop-list',
  templateUrl: './dragdroplist.component.html',
  styleUrl: './dragdroplist.component.css',
  imports: [CdkDropList, CdkDrag, NgIf, MatButton, ParticipantCardComponent, NgOptimizedImage],
  standalone: true,
})
export class DragDroplistComponent {
  name!: string;
  participants!: Participant[];
  chosenParticipants!: Participant[];

  constructor(private route: ActivatedRoute, private participantsService: ParticipantsService) {}

  ngOnInit() {
    this.chosenParticipants = [];
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name')!;
    });
    this.participantsService.getParticipants().subscribe(data => {
      console.log(data);
      this.participants = data.participants;
    });
  }

  drop(event: CdkDragDrop<Participant[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

    }
    if (this.chosenParticipants.length === 12) {
      var last = this.chosenParticipants.pop();
      this.participants.push(<Participant>last);
    }
    this.recalculate();
  }

  recalculate() {
    var maxPoints = 12;
    this.chosenParticipants.forEach(item => {
      item.points = maxPoints;
      maxPoints--;
      if (maxPoints === 11) {
        maxPoints = 10;
      }
      if (maxPoints < 0) {
        maxPoints = 0;
      }
    });
    this.chosenParticipants.sort((a, b) => b.points - a.points);
    this.participants.forEach(item => {
      item.points = 0;
    });
  }

  reset() {
    this.participants.push(...this.chosenParticipants);
    this.chosenParticipants = [];
    this.recalculate();
  }
}
