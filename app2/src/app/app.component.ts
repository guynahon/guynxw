import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FirstCompComponent } from '../../../uilib/src/lib/first-comp/first-comp.component'
import { ImageComponent } from '../../../uilib/src/lib/image-comp/image.component'
import { DropdownComponent } from '../../../uilib/src/lib/dropdown/dropdown.component'
import { ImageModule } from 'primeng/image';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FirstCompComponent, ImageComponent, ImageModule, DropdownComponent],
  selector: 'app-root',
  template: `
    <lib-dropdown [options]="optionList" [placeholder]="optionsPlaceholder" (selectEvent)="onSelect($event)"></lib-dropdown>
    <lib-first-comp [text]="title"></lib-first-comp>
    <lib-image [imageUrl]="'https://bgn2018media.s3.amazonaws.com/wp-content/uploads/2017/11/28224957/tyrande-whisperwind-1920x1080.jpg'" [width]="'400'"></lib-image>
    <div>DropDown for {{title}} selected option: {{currentOption}}</div>

    `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app2';

  optionList: string[] = ["Mazda", "Ferrari", "Toyota", "Lexus"];
  optionsPlaceholder: string = "Cars";
  currentOption: string = "";

  onSelect(selectOPtion: string) {
      this.currentOption = selectOPtion;
  }
}
