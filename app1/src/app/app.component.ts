import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FirstCompComponent } from '../../../uilib/src/lib/first-comp/first-comp.component';
import { ImageComponent } from '../../../uilib/src/lib/image-comp/image.component';
import { DropdownComponent } from '../../../uilib/src/lib/dropdown/dropdown.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FirstCompComponent, ImageComponent, DropdownComponent],
  selector: 'app-root',
  template: `
    <lib-dropdown [options]="optionList" [placeholder]="optionsPlaceholder" (selectEvent)="onSelect($event)"></lib-dropdown>
    <lib-first-comp [text]="title"></lib-first-comp>
    <lib-image [imageUrl]="'https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg'" [width]="'250'"></lib-image>
    <div>DropDown selected option: {{currentOption}}</div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';

  optionList: string[] = ["Guy", "Noam", "Avital", "Pazit"];
  optionsPlaceholder: string = "Names";
  currentOption: string = "";

  onSelect(selectOPtion: string) {
      this.currentOption = selectOPtion;
  }
}
