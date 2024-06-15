import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
  <div class="container">
  <nav class="navbar services" (click)="toggleMenu()">
    <div class="selected">{{placeholder}}</div>
    <ul class="drop-down" [ngClass]="{'uncovermenu': isMenuOpen}">
      <li *ngFor="let option of options; index as i" (click)="callParentSelect(i)">{{option}}</li>
    </ul>
  </nav>
</div>`,
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = "";
  @Output() selectEvent = new EventEmitter();

  isMenuOpen: boolean= false;
  callParentSelect(index: number) {
    const value = this.options[index];
    this.placeholder = value;
    this.selectEvent.emit(value);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}