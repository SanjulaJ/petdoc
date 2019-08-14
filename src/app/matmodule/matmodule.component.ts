import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})

@Component({
  selector: 'app-matmodule',
  templateUrl: './matmodule.component.html',
  styleUrls: ['./matmodule.component.scss']
})

export class MatmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
