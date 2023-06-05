import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Page not Found</mat-card-title>
      <mat-card-content>
        We couldn't find the page! Not even with x-ray vision.
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Take me Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class PageNotFoundComponent {}
