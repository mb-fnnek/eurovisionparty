// confirm-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Potwierdzenie</h2>
    <mat-dialog-content>
      Czy na pewno chcesz zapisać swoje głosy?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button [mat-dialog-close]="false">Nie</button>
      <button mat-flat-button [mat-dialog-close]="true" color="primary">Tak</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {}
