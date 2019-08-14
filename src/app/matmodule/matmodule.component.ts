import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';



@NgModule({
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    MatAutocompleteModule
  ],
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    MatAutocompleteModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MatmoduleComponent {}
