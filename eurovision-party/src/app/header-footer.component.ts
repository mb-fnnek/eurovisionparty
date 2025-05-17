import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="container">
      <div class="site-title">
        <img ngSrc="/ESC_Basel2025_White_V2.png" height="92" width="240" alt="ESC Basel 2025">
      </div>
      <div class="qr-container">
        <img ngSrc="/qr.png" height="402" width="402" alt="QR Code">
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .site-title {
      padding: 1rem;
    }

    .qr-container {
      margin-top: auto;
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
  `]
})
export class HeaderFooterComponent {}
