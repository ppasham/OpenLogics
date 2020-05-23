import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppSecurityModule } from './app-security.module';
import { SharedModule } from './app-shared.module';
import { UiMaterialFlexModule } from './app-ui.module';

import { AppComponent } from './Home/app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiMaterialFlexModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppSecurityModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
