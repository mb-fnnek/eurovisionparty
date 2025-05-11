import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList, CdkDragHandle,
} from '@angular/cdk/drag-drop';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {ParticipantCardComponent} from './participant-card/participant-card.component';
import {ActivatedRoute} from '@angular/router';

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
  imports: [CdkDropList, CdkDrag, NgIf, MatButton, ParticipantCardComponent, NgOptimizedImage, CdkDragHandle],
})
export class DragDroplistComponent {
  name!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name')!;
    });
  }
  chosenParticipants = [new Item('Get to work', 12), new Item('Pick up groceries', 10), new Item('Go home', 9), new Item('Fall asleep', 8)];

  participants = [new Item('Get up', 0), new Item('Brush teeth', 0), new Item('Take a shower', 0), new Item('Check e-mail', 0), new Item('Walk dog', 0), new Item('Walk dog 2', 0), new Item('Wa2lk dog', 0), new Item('Walk dogsss', 0), new Item('Walk dog', 0)];

  drop(event: CdkDragDrop<Item[]>) {
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
      this.participants.push(<Item>last);
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
