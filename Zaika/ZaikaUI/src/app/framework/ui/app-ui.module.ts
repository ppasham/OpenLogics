import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './design/material/material.module';
import { FlxLayoutModule } from './layout/Flex/layout.module';

@NgModule({
  imports: [
     CommonModule,
     FormsModule, ReactiveFormsModule,
     MaterialModule,
     FlxLayoutModule
  ],
  exports: [
       FormsModule, ReactiveFormsModule,
       MaterialModule,
       FlxLayoutModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppUserInterfaceModule { }
