import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="container">
      <div class="qr-container">
        <div class="website-url"><h2>fnnek.com</h2></div>
        <img ngSrc="/qr.png" height="402" width="402" alt="QR Code" class="qr-image">
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .website-url {
      color: white;
      font-size: 1.5rem;
      text-align: center;
    }

    .qr-image {
      border-radius: 20px;
    }
  `]
})
export class HeaderFooterComponent {}
