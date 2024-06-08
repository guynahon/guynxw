import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FirstCompComponent } from '../../../uilib/src/lib/first-comp/first-comp.component'
import { ImageComponent } from '../../../uilib/src/lib/image-comp/image.component'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FirstCompComponent, ImageComponent],
  selector: 'app-root',
  template: `
    <lib-first-comp [text]="title"></lib-first-comp>
    <lib-image [imageUrl]="'https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg'" [width]="'250'"></lib-image>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';
}
