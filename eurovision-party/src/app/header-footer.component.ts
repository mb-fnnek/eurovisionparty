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
        <img ngSrc="/qr.png" height="200" width="200" alt="QR Code" class="qr-image">
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
      flex: 1;
      display: flex;
      align-items: center; /* wycentrowanie w pionie */
      justify-content: center;
    }

    .qr-image {
      border-radius: 20px;
    }
  `]
})
export class HeaderFooterComponent {}
