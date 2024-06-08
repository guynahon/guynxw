import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-first-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="header">Welcome to {{text}}!</h1>`,
  styleUrl: './first-comp.component.css',
})
export class FirstCompComponent {
  @Input() text: String = "";
}
