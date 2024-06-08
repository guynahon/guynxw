import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'lib-image',
  standalone: true,
  imports: [CommonModule, ImageModule],
  template: `
  <p-image
    [src]= "imageUrl"
    alt="Image" 
    [width]="width" />
  `,
  styleUrl: './image.component.css',
})
export class ImageComponent {
  @Input() imageUrl: string = "";
  @Input() width: string = "";
}
