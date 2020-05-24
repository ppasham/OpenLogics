import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './design/material/material.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
     CommonModule,
     BrowserAnimationsModule,
     FormsModule, ReactiveFormsModule,
     MaterialModule,
     LayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppUserInterfaceModule { }
