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
        <img ngSrc="/qr.png" height="200" width="200" alt="QR Code">
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
    }

    .site-title {
      padding: 1rem;
    }

    .qr-container {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding-bottom: 2rem;
    }
  `]
})
export class HeaderFooterComponent {}
