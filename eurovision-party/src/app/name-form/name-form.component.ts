import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import { Router } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  imports: [
    MatLabel,
    FormsModule,
    MatFormField,
    MatCard,
    MatInput,
    MatButton,
    NgOptimizedImage
  ],
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent {
  name: string = '';
  constructor(private router: Router) {}

  submitName() {
    console.log('Imię:', this.name);
  }

  goToVote(): void {
    localStorage.setItem('name', this.name);
    this.router.navigate(['/vote/' + this.name]);
  }
}
