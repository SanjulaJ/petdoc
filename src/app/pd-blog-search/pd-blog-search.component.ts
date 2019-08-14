import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Keyword {
  name: string;
}

@Component({
  selector: 'app-pd-blog-search',
  templateUrl: './pd-blog-search.component.html',
  styleUrls: ['./pd-blog-search.component.scss'],
})
export class PdBlogSearchComponent {

visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Keyword[] = [
    {name: 'Dog'},
    {name: 'Cat'},
    {name: 'Disease'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Keyword): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
